import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Franchise } from '../Store_Franchise/entities/Store_Franchise.entity';
import { Store } from './entities/Store.entity';

@Injectable()
export class StoreSerivce {
  @InjectRepository(Store)
  private readonly storeRepository: Repository<Store>;
  @InjectRepository(Franchise)
  private readonly franchiseRepository: Repository<Franchise>;

  async create({ createStoreInput }) {
    const { franchise_id, ...rest } = createStoreInput;
    const isValid = await this.franchiseRepository.findOne({
      where: { franchise_id: franchise_id },
    });
    return isValid
      ? await this.storeRepository.save({ ...createStoreInput })
      : { message: 'franchise_id가 존재하지 않습니다.' };
  }

  async modify({ storeId, updateStoreInput }) {
    const target = await this.storeRepository.findOne({
      where: { store_id: storeId },
    });
    const result = await this.storeRepository.save({
      store_id: storeId,
      ...target,
      ...updateStoreInput,
    });
    return result;
  }

  async findOne({ storeId }) {
    return await this.storeRepository.findOne({
      where: { store_id: storeId },
      relations: ['franchise_id'],
    });
  }

  async findAll() {
    return await this.storeRepository.find();
  }

  async delete({ storeId }) {
    const result = await this.storeRepository.delete({ store_id: storeId });
    return result.affected
      ? { message: `${storeId} 탈퇴가 완료되었습니다.` }
      : false;
  }
}
