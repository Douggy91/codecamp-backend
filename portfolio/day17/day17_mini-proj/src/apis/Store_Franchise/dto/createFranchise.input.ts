import { Field, InputType } from '@nestjs/graphql';
import { StoreInput } from './StoreInput';

@InputType()
export class CreateFranchiseInput {
  @Field(() => String)
  franchise_name: string;

  @Field(() => [String])
  store_category_id: string[];
}
