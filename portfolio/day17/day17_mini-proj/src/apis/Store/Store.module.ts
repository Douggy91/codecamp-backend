import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store_Category } from '../Store_Category/entities/Store_Category.entity';
import { Franchise } from '../Store_Franchise/entities/Store_Franchise.entity';
import { Store } from './entities/Store.entity';
import { StoreResolver } from './Store.resolver';
import { StoreSerivce } from './Store.service';

@Module({
  imports: [TypeOrmModule.forFeature([Store, Franchise, Store_Category])],
  providers: [StoreResolver, StoreSerivce],
})
export class StoreModule {}
