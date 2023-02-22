import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from '../Store/entities/Store.entity';
import { Store_Category } from '../Store_Category/entities/Store_Category.entity';
import { Franchise } from './entities/Store_Franchise.entity';
import { FranchiseResolver } from './Store_Franchise.resolver';
import { FranchiseService } from './Store_Franchise.service';

@Module({
  imports: [TypeOrmModule.forFeature([Franchise, Store, Store_Category])],
  providers: [FranchiseResolver, FranchiseService],
})
export class FranchiseModule {}
