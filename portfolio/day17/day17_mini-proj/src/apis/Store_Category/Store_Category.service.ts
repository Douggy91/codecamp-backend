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
      storecategory_name: storecategoryName,
    });
    return result;
  }

  async findOne({ storecategoryId }) {
    const result = await this.storecategoryRepository.findOne({
      where: { storecategory_id: storecategoryId },
      relations: ['storecategory_id'],
    });
    return result;
  }

  async findAll() {
    return this.storecategoryRepository.find({
      relations: ['storecategory_id'],
    });
  }

  async modify({ storecategoryId, storecategoryName }) {
    return await this.storecategoryRepository.save({
      storecategory_id: storecategoryId,
      storecategory_name: storecategoryName,
    });
  }
  async delete({ storecategoryId }) {
    const result = await this.storecategoryRepository.softDelete({
      storecategory_name: storecategoryId,
    });
    return result.affected
      ? { message: `카테고리 : ${storecategoryId} 삭제 ` }
      : false;
  }
}
