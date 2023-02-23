import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  product_name: string;

  @Field(() => String)
  store_id: string;

  @Field(() => [String])
  product_category_id: string[];

  @Field(() => Int)
  price: number;
}
