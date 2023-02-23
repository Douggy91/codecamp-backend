import { Mutation, Query, Args, Resolver } from '@nestjs/graphql';
import { DeleteOutput } from 'src/commons/deleteMessage/Delete.output';
import { Store_Category } from './entities/Store_Category.entity';
import { StoreCategoryService } from './Store_Category.service';

@Resolver()
export class StoreCategoryResolver {
  constructor(private readonly storecategoryService: StoreCategoryService) {}

  @Mutation(() => Store_Category)
  createStorecategory(@Args('storecategoryName') storecategoryName: string) {
    return this.storecategoryService.create({ storecategoryName });
  }

  @Mutation(() => Store_Category)
  modifyStorecategory(
    @Args('storecategoryId') storecategoryId: string,
    @Args('storecategoryName') storecategoryName: string,
  ) {
    return this.storecategoryService.modify({
      storecategoryId,
      storecategoryName,
    });
  }
  @Mutation(() => DeleteOutput || Boolean)
  deleteStorecategory(@Args('storecategoryId') storecategoryId: string) {
    return this.storecategoryService.delete({ storecategoryId });
  }

  @Query(() => Store_Category)
  fetchStorecategory(@Args('storecategoryId') storecategoryId: string) {
    return this.storecategoryService.findOne({ storecategoryId });
  }

  @Query(() => Store_Category)
  fetchStorecategoryAll() {
    return this.storecategoryService.findAll();
  }
}
