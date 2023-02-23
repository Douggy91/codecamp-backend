import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { DeleteOutput } from 'src/commons/deleteMessage/Delete.output';
import { CreateOrderInput } from './dto/CreateOrder.input';
import { UpdateOrderInput } from './dto/updateOrder.input';
import { Order } from './entities/Order.entity';
import { OrderService } from './Order.service';

@Resolver()
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order || DeleteOutput)
  async createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ) {
    return await this.orderService.create({ createOrderInput });
  }

  @Mutation(() => Order)
  async modiOrder(
    @Args('orderId') orderId: string,
    @Args('updateOrderInput') updateOrderInput: UpdateOrderInput,
  ) {
    return await this.orderService.modify({ orderId, updateOrderInput });
  }

  @Mutation(() => DeleteOutput)
  async deleteOrder(@Args('orderId') orderId: string) {
    return await this.orderService.delete({ orderId });
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
