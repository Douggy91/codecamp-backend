import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product_Category } from '../Product_Category/entities/Product_Category.entity';
import { Product } from './entities/Product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Product_Category)
    private readonly productcategoryRepository: Repository<Product_Category>,
  ) {}

  async create({ createProductInput }) {
    const { product_category_id, ...rest } = createProductInput;
    const productCategorys = [];
    for (let i = 0; i < product_category_id.length; i++) {
      const isValid = await this.productcategoryRepository.findOne({
        where: { product_category_id: product_category_id[i] },
      });
      if (isValid) {
        productCategorys.push(product_category_id[i]);
      } else {
        await this.productcategoryRepository.save({
          product_category_id: product_category_id[i],
        });
        productCategorys.push(product_category_id);
      }
    }
    const result = await this.productRepository.save({
      product_category_id: productCategorys,
      ...createProductInput,
    });
    return result;
  }

  async modify({ productId, updateProductInput }) {
    return await this.productRepository.save({
      product_id: productId,
      ...updateProductInput,
    });
  }

  async delete({ productId }) {
    const isDone = await this.productRepository.softDelete({
      product_id: productId,
    });
    return isDone.affected
      ? { message: `${productId} 상품이 삭제 되었습니다.` }
      : { message: `${productId} 상품이 없습니다.` };
  }

  async findOne({ productId }) {
    return this.productRepository.findOne({
      where: { product_id: productId },
      relations: ['product_category_id', 'product_id', 'store_id'],
    });
  }

  async findAll() {
    return this.productRepository.find({
      relations: ['product_category_id', 'product_id', 'store_id'],
    });
  }

  async isValid({ productId }) {
    const target = await this.productRepository.findOne({
      where: { product_id: productId },
    });

    if (!target)
      throw new UnprocessableEntityException('해당 상품은 없는 상품입니다.');
  }
}
