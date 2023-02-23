import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteOutput } from 'src/commons/deleteMessage/Delete.output';
import { CreateOrderProductInput } from './dto/CreateOrderProduct.input';
import { UpdateOrderProductInput } from './dto/UpdateOrderProduct.input';
import { Order_Product } from './entities/Order_Product.entity';
import { OrderProductSerivce } from './Order_Product.service';

@Resolver()
export class OrderProductResolver {
  constructor(private readonly orderproductService: OrderProductSerivce) {}

  @Mutation(() => Order_Product || DeleteOutput)
  createOrderProduct(
    @Args('createOrderProductInput')
    createOrderProductInput: CreateOrderProductInput,
  ) {
    return this.orderproductService.create({ createOrderProductInput });
  }

  @Mutation(() => Order_Product)
  modifyOrderProduct(
    @Args('orderId') orderId: string,
    @Args('updateOrderProductInput')
    updateOrderProductInput: UpdateOrderProductInput,
  ) {
    return this.orderproductService.modify({
      orderId,
      updateOrderProductInput,
    });
  }

  @Mutation(() => Order_Product)
  deleteOrderProduct(@Args('orderId') orderId: string) {
    return this.orderproductService.delete({ orderId });
  }

  @Query(() => Order_Product)
  fetchOrderProduct(@Args('orderId') orderId: string) {
    return this.orderproductService.findOne({ orderId });
  }

  @Query(() => Order_Product)
  fetchOrderProductAll() {
    return this.orderproductService.findAll();
  }
}
