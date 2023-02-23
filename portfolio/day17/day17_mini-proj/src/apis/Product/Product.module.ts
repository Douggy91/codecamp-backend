import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order_Product } from '../Order_Product/entities/Order_Product.entity';
import { Product_Category } from '../Product_Category/entities/Product_Category.entity';
import { Product } from './entities/Product.entity';
import { ProductResolver } from './Product.resolver';
import { ProductService } from './Product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Product_Category, Order_Product]),
  ],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
