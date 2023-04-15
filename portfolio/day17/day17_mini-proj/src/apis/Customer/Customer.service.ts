import { ConflictException, Injectable } from '@nestjs/common';
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
    return await this.customerRepository.save({
      ...createCustomerInput,
    });
  }

  async findOne({ customerName }) {
    const result = await this.customerRepository.findOne({
      where: { customer_name: customerName },
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

  async delete({ customerId }) {
    await this.customerRepository.softDelete({
      customer_id: customerId,
    });
    return { message: `${customerId}}님, 성공적으로 탈퇴하셨습니다.` };
  }

  async isRegistEmail({ email }) {
    const target = await this.customerRepository.findOne({
      where: { email: email },
    });
    if (target) throw new ConflictException('이미 가입한 이메일입니다.');
  }

  async isRegistid({ customerId }) {
    const target = await this.customerRepository.findOne({
      where: { customer_id: customerId },
    });
    if (!target) throw new ConflictException('등록되지 않은 고객입니다.');
  }

  async isRegistName({ customerName }) {
    const target = await this.customerRepository.findOne({
      where: { customer_name: customerName },
    });
    if (!target) throw new ConflictException('등록되지 않은 고객입니다.');
  }
}
