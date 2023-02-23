import { Injectable } from '@nestjs/common';
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
    const isValid = await this.productRepository.findOne({
      where: { product_id: productId },
    });
    return isValid
      ? await this.productRepository.save({
          product_id: productId,
          ...updateProductInput,
        })
      : { message: '수정할 대상이 존재하지 않습니다. ' };
  }

  async delete({ productId }) {
    const isDone = await this.productRepository.softDelete({
      product_id: productId,
    });
    return isDone
      ? { message: `${productId} 상품을 삭제했습니다.` }
      : { message: `삭제할 대상이 없습니다.` };
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
}
