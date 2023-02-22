import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store_Category } from './entities/Store_Category.entity';
import { StoreCategoryResolver } from './Store_Category.resolver';
import { StoreCategoryService } from './Store_Category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Store_Category])],
  providers: [StoreCategoryResolver, StoreCategoryService],
})
export class Store_CategoryModule {}
