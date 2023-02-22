import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteOutput {
  @Field(() => String)
  message: string;
}
