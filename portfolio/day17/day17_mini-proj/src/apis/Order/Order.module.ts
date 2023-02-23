import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../Customer/entities/Customer.entity';
import { Store } from '../Store/entities/Store.entity';
import { Order } from './entities/Order.entity';
import { OrderResolver } from './Order.resolver';
import { OrderService } from './Order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Store, Customer, Order])],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
