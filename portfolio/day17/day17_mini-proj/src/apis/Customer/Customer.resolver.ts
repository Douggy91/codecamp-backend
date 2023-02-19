import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { CustomerService } from './Customer.service';
import { CreateCustomerInput } from './dto/CreateCustomer.input';
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

  @Query(() => Customer)
  fetchCustomer(@Args('customerId') customerId: string) {
    return this.customerService.findOne({ customerId });
  }
}
