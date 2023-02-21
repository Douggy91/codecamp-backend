import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteCustomer {
  @Field(() => String)
  message: string;
}
