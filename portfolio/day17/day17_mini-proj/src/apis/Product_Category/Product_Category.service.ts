import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product_Category } from './entities/Product_Category.entity';

@Injectable()
export class ProductCategoryService {
  @InjectRepository(Product_Category)
  private readonly productcategoryRepository: Repository<Product_Category>;
  async create({ categoryName }) {
    return await this.productcategoryRepository.save({
      product_category_name: categoryName,
    });
  }

  async modify({ categoryId, categoryName }) {
    const target = await this.productcategoryRepository.findOne({
      where: { product_category_id: categoryId },
    });
    const newData = {
      product_category_id: target.product_category_id,
      product_category_name: categoryName,
    };
    return (await target)
      ? this.productcategoryRepository.save(newData)
      : { message: '대상이 존재하지 않습니다.' };
  }

  async delete({ categoryId }) {
    const isDone = await this.productcategoryRepository.softDelete({
      product_category_id: categoryId,
    });

    return isDone.affected
      ? { message: `${categoryId} 카테고리 삭제` }
      : { message: `${categoryId} 는 존재하지 않습니다.` };
  }

  async findOne({ categoryId }) {
    return await this.productcategoryRepository.findOne({
      where: { product_category_id: categoryId },
      relations: ['product_category_id'],
    });
  }

  async findAll() {
    return await this.productcategoryRepository.find({
      relations: ['product_category_id'],
    });
  }
}
