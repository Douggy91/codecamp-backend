import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateStarbucksInput {
  @Field(() => String)
  menu: string;
  @Field(() => Int)
  price: number;
  @Field(() => Int)
  kcal: number;
  @Field(() => Int)
  saturted_fat: number;
  @Field(() => Int)
  protein: number;
  @Field(() => Int)
  salt: number;
  @Field(() => Int)
  sugar: number;
  @Field(() => Int)
  caffeine: number;
}
