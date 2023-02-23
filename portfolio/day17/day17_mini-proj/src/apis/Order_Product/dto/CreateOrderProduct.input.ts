import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderProductInput {
  @Field(() => String)
  order_id: string;

  @Field(() => String)
  product_id: string;

  @Field(() => Int)
  order_cnt: number;
}
