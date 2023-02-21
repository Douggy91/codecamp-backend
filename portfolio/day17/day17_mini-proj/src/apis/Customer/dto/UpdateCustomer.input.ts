import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCustomerInput } from './CreateCustomer.input';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {}
