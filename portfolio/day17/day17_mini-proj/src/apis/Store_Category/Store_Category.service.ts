import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store_Category } from './entities/Store_Category.entity';

@Injectable()
export class StoreCategoryService {
  constructor(
    @InjectRepository(Store_Category)
    private readonly storecategoryRepository: Repository<Store_Category>,
  ) {}
  async create({ storecategoryName }) {
    const result = await this.storecategoryRepository.save({
      store_category_name: storecategoryName,
    });
    return result;
  }

  async findOne({ storecategoryId }) {
    const result = await this.storecategoryRepository.findOne({
      where: { store_category_id: storecategoryId },
    });
    return result;
  }

  async findAll() {
    return this.storecategoryRepository.find();
  }

  async modify({ storecategoryId, storecategoryName }) {
    return await this.storecategoryRepository.save({
      store_category_id: storecategoryId,
      store_category_name: storecategoryName,
    });
  }
  async delete({ storecategoryName }) {
    const result = await this.storecategoryRepository.softDelete({
      store_category_name: storecategoryName,
    });
    return result.affected
      ? { message: `카테고리 : ${storecategoryName} 삭제 ` }
      : false;
  }
}
