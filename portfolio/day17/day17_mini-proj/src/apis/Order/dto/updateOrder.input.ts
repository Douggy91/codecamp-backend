import { InputType, PartialType } from '@nestjs/graphql';
import { CreateOrderInput } from './CreateOrder.input';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {}
