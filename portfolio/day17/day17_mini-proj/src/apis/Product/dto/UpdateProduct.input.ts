import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './CreateProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
