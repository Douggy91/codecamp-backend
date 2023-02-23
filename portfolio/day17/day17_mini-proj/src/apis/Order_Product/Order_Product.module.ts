import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../Order/entities/Order.entity';
import { Product } from '../Product/entities/Product.entity';
import { Order_Product } from './entities/Order_Product.entity';
import { OrderProductResolver } from './Order_Product.resolver';
import { OrderProductSerivce } from './Order_Product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Product, Order_Product])],
  providers: [OrderProductResolver, OrderProductSerivce],
})
export class OrderProductModule {}
