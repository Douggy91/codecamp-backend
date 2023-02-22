import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/Order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create({ createOrderInput }) {
    const { customer_id, store_id } = createOrderInput;
    const result = await this.orderRepository.save({
      store_id: store_id,
      customer_id: customer_id,
    });
    return result;
  }

  async findAll() {
    return await this.orderRepository.find({
      relations: ['customer_id', 'store_id'],
    });
  }

  async findOne({ orderId }) {
    return await this.orderRepository.findOne({
      where: { order_id: orderId },
      relations: ['customer_id', 'store_id'],
    });
  }

  async modify({ orderId, updateOrderInput }) {
    const modiOrder = await this.orderRepository.findOne({
      where: { order_id: orderId },
    });
    const newOrder = {
      ...modiOrder,
      order_id: orderId,
      ...updateOrderInput,
    };
    return await this.orderRepository.save(newOrder);
  }
}
