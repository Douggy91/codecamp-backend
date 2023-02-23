import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFranchiseInput {
  @Field(() => String)
  franchise_name: string;

  @Field(() => [String])
  storecategory_name: string[];
}
