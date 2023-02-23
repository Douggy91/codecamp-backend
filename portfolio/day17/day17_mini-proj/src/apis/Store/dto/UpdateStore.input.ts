import { InputType, PartialType } from '@nestjs/graphql';
import { CreateStoreInput } from './CreateStore.input';

@InputType()
export class UpdateStoreInput extends PartialType(CreateStoreInput) {}
