import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerResolver } from './Customer.resolver';
import { CustomerService } from './Customer.service';
import { Customer } from './entities/Customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerResolver, CustomerService],
})
export class CustomerModule {}
