import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from '../Store/entities/Store.entity';
import { Franchise } from './entities/Store_Franchise.entity';

@Injectable()
export class FranchiseService {
  constructor(
    @InjectRepository(Franchise)
    private readonly franchiseRepository: Repository<Franchise>,
  ) {}
  // @InjectRepository(Store)
  // private readonly storeRepository: Repository<Store>,

  async create({ createfranchiseInput }) {
    const result_comp = await this.franchiseRepository.save({
      ...createfranchiseInput,
    });
    return result_comp;
  }

  async modify({ franchiseId, updatefranchiseInput }) {
    const result = await this.franchiseRepository.findOne({
      where: { franchise_id: franchiseId },
    });
    const result_comp = await this.franchiseRepository.save({
      franchise_id: franchiseId,
      ...result,
      ...updatefranchiseInput,
    });
    return result_comp;
  }

  async delete({ franchiseId }) {
    const result = await this.franchiseRepository.softDelete({
      franchise_id: franchiseId,
    });
    return result.affected
      ? { message: `${franchiseId} 업체가 가맹을 탈퇴했습니다.` }
      : false;
  }

  async findOne({ franchiseId }) {
    return await this.franchiseRepository.findOne({
      where: { franchise_id: franchiseId },
      relations: ['store_category_id', 'root_store_id'],
    });
  }

  async findAll() {
    return await this.franchiseRepository.find({
      relations: ['store_category_id', 'root_store_id'],
    });
  }
}
