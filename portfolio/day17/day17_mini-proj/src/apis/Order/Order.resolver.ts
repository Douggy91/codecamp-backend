import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateOrderInput } from './dto/CreateOrder.input';
import { Order } from './entities/Order.entity';
import { OrderService } from './Order.service';

@Resolver()
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order)
  async createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ) {
    return await this.orderService.create({ createOrderInput });
  }

  @Query(() => Order)
  async fetchOrders() {
    return await this.orderService.findAll();
  }

  @Query(() => Order)
  async fetchOrder(@Args('orderId') orderId: string) {
    return this.orderService.findOne({ orderId });
  }
}
