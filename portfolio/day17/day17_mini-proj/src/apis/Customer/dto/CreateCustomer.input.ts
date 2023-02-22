import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field(() => String)
  customer_name: string;

  @Field(() => String)
  passwd: string;

  @Field(() => String)
  phone_num: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  address: string;
}
