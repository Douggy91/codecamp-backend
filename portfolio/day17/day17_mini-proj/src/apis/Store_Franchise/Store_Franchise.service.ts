import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store_Category } from '../Store_Category/entities/Store_Category.entity';
import { Franchise } from './entities/Store_Franchise.entity';

@Injectable()
export class FranchiseService {
  constructor(
    @InjectRepository(Franchise)
    private readonly franchiseRepository: Repository<Franchise>,
    @InjectRepository(Store_Category)
    private readonly storecategoryRepository: Repository<Store_Category>,
  ) {}

  async create({ createfranchiseInput }) {
    const { storecategory_name, franchise_name } = createfranchiseInput;
    const categorys = [];
    for (let i = 0; i < storecategory_name.length; i++) {
      const pre_regist = await this.storecategoryRepository.findOne({
        where: { storecategory_name: storecategory_name[i] },
      });
      if (pre_regist) {
        categorys.push(storecategory_name[i]);
      } else {
        await this.storecategoryRepository.save({
          storecategory_name: storecategory_name[i],
        });
        categorys.push(storecategory_name[i]);
      }
    }
    const result_comp = await this.franchiseRepository.save({
      store_category_name: categorys,
      franchise_name: franchise_name,
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
      relations: ['storecategory_id'],
    });
  }

  async findAll() {
    return await this.franchiseRepository.find({
      relations: ['storecategory_id'],
    });
  }
}
