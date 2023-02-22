import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteOutput } from 'src/commons/deleteMessage/Delete.output';
import { CreateFranchiseInput } from './dto/createFranchise.input';
import { UpdateFranchiseInput } from './dto/updateFranchise.input';
import { Franchise } from './entities/Store_Franchise.entity';
import { FranchiseService } from './Store_Franchise.service';

@Resolver()
export class FranchiseResolver {
  constructor(private readonly franchiseService: FranchiseService) {}

  @Query(() => Franchise)
  async fetchCategory(@Args('franchiseId') franchiseId: string) {
    return await this.franchiseService.findOne({ franchiseId });
  }

  @Query(() => Franchise)
  async fetchCategoryAll() {
    return await this.franchiseService.findAll();
  }

  @Mutation(() => Franchise)
  async createFranchise(
    @Args('createfranchiseInput') createfranchiseInput: CreateFranchiseInput,
  ) {
    return await this.franchiseService.create({ createfranchiseInput });
  }

  @Mutation(() => Franchise)
  async modifyCategory(
    @Args('franchiseId') franchiseId: string,
    @Args('updatefranchiseInput') updatefranchiseInput: UpdateFranchiseInput,
  ) {
    return await this.franchiseService.modify({
      franchiseId,
      updatefranchiseInput,
    });
  }

  @Mutation(() => DeleteOutput || Boolean)
  async deleteCategory(@Args('franchiseId') franchiseId: string) {
    return await this.franchiseService.delete({ franchiseId });
  }
}
