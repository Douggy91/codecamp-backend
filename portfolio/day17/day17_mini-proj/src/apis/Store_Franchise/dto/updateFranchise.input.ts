import { InputType, PartialType } from '@nestjs/graphql';
import { CreateFranchiseInput } from './createFranchise.input';

@InputType()
export class UpdateFranchiseInput extends PartialType(CreateFranchiseInput) {}
