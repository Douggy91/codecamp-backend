import { InputType, PartialType } from '@nestjs/graphql';
import { CreateOrderProductInput } from './CreateOrderProduct.input';

@InputType()
export class UpdateOrderProductInput extends PartialType(
  CreateOrderProductInput,
) {}
