import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { CustomerService } from './Customer.service';
import { CreateCustomerInput } from './dto/CreateCustomer.input';
import { DeleteOutput } from '../../commons/deleteMessage/Delete.output';
import { UpdateCustomerInput } from './dto/UpdateCustomer.input';
import { Customer } from './entities/Customer.entity';

@Resolver()
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => DeleteOutput)
  async createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    const { email, ...rest } = createCustomerInput;
    await this.customerService.isRegistEmail({ email });
    return await this.customerService.create({ createCustomerInput });
  }

  @Mutation(() => Customer)
  async updateCustomer(
    @Args('customerId') customerId: string,
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ) {
    await this.customerService.isRegistid({ customerId });
    return this.customerService.update({ customerId, updateCustomerInput });
  }

  @Mutation(() => DeleteOutput)
  async deleteCustomer(@Args('customerId') customerId: string) {
    await this.customerService.isRegistid({ customerId });
    return this.customerService.delete({ customerId });
  }

  @Query(() => Customer)
  async fetchCustomer(@Args('customerName') customerName: string) {
    await this.customerService.isRegistName({ customerName });
    return this.customerService.findOne({ customerName });
  }

  @Query(() => [Customer])
  fetchCustomerAll() {
    return this.customerService.findAll();
  }
}
