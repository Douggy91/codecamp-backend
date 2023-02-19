import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/Customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create({ createCustomerInput }) {
    const result = await this.customerRepository.save({
      ...createCustomerInput,
    });
    return result;
  }

  async findOne({ customerId }) {
    const result = await this.customerRepository.findOne({
      where: { customer_id: customerId },
    });
    return result;
  }

  async findAll() {
    return await this.customerRepository.find();
  }

  async update({ customerId, updateCustomerInput }) {
    const mycustomer = await this.customerRepository.findOne({
      where: { customer_id: customerId },
    });

    const newCustomer = {
      ...mycustomer,
      id: customerId,
      ...updateCustomerInput,
    };
    return await this.customerRepository.save(newCustomer);
  }
}
