import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product_Category } from './entities/Product_Category.entity';
import { ProductCategoryResolver } from './Product_Category.resolver';
import { ProductCategoryService } from './Product_Category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product_Category])],
  providers: [ProductCategoryResolver, ProductCategoryService],
})
export class ProductCategoryModule {}
