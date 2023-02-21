import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { CustomerService } from './Customer.service';
import { CreateCustomerInput } from './dto/CreateCustomer.input';
import { DeleteCustomer } from './dto/Delete.output';
import { UpdateCustomerInput } from './dto/UpdateCustomer.input';
import { Customer } from './entities/Customer.entity';

@Resolver()
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => Customer)
  async createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    return await this.customerService.create({ createCustomerInput });
  }

  @Mutation(() => Customer)
  async updateCustomer(
    @Args('customerId') customerId: string,
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ) {
    return this.customerService.update({ customerId, updateCustomerInput });
  }

  @Mutation(() => DeleteCustomer || Boolean)
  async deleteCustomer(@Args('customerId') customerId: string) {
    return this.customerService.delete({ customerId });
  }

  @Query(() => Customer)
  fetchCustomer(@Args('customerName') customerName: string) {
    return this.customerService.findOne({ customerName });
  }

  @Query(() => [Customer])
  fetchCustomerAll() {
    return this.customerService.findAll();
  }
}
