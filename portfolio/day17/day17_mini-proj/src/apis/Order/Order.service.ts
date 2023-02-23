import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../Customer/entities/Customer.entity';
import { Store } from '../Store/entities/Store.entity';
import { Order } from './entities/Order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create({ createOrderInput }) {
    const { customer_id, store_id } = createOrderInput;
    const customerValid = await this.customerRepository.findOne({
      where: { customer_id: customer_id },
    });
    const storeValid = await this.storeRepository.findOne({
      where: { store_id: store_id },
    });
    const result = await this.orderRepository.save({
      store_id: store_id,
      customer_id: customer_id,
    });
    return customerValid && storeValid ? result : { message: 'error' };
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

  async delete({ orderId }) {
    const result = await this.orderRepository.softDelete({ order_id: orderId });
    return result.affected
      ? { message: `${orderId}번 주문 삭제` }
      : { message: `${orderId}번 주문이 없습니다.` };
  }
}
