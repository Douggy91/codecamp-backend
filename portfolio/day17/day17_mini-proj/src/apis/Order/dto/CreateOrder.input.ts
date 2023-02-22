import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => String)
  customer_id: string;

  @Field(() => String)
  store_id: string;
}
