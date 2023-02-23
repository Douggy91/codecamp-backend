import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../Order/entities/Order.entity';
import { Product } from '../Product/entities/Product.entity';
import { Order_Product } from './entities/Order_Product.entity';

@Injectable()
export class OrderProductSerivce {
  constructor(
    @InjectRepository(Order_Product)
    private readonly orderproductRepository: Repository<Order_Product>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create({ createOrderProductInput }) {
    const { order_id, product_id, order_cnt } = createOrderProductInput;
    const ProductValid = await this.productRepository.findOne({
      where: { product_id: product_id },
    });
    const OrderValid = await this.orderRepository.findOne({
      where: { order_id: order_id },
    });
    return ProductValid && OrderValid
      ? await this.orderproductRepository.save({ ...createOrderProductInput })
      : { message: '주문번호나 상품이 존재하지 않습니다' };
  }

  async modify({ orderId, updateOrderProductInput }) {
    const target = await this.orderproductRepository.findOne({
      where: { order_id: orderId },
    });
    const newData = {
      order_id: orderId,
      ...updateOrderProductInput,
    };
    return await this.orderproductRepository.save(newData);
  }

  async delete({ orderId }) {
    const result = await this.orderproductRepository.softDelete(orderId);
    return result.affected
      ? { message: `${orderId} 번 주문 삭제` }
      : { message: `${orderId} 번 주문이 존재하지 않습니다.` };
  }

  async findOne({ orderId }) {
    return this.orderproductRepository.findOne({
      where: { order_id: orderId },
    });
  }

  async findAll() {
    return this.orderproductRepository.find();
  }
}
