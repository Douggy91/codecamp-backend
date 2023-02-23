import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStoreInput {
  @Field(() => String)
  store_name: string;

  @Field(() => String)
  passwd: string;

  @Field(() => String)
  franchise_id: string;

  @Field(() => String)
  phone_num: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  address: string;

  @Field(() => Boolean, { nullable: true })
  isRootStore: boolean;
}
