import { Mutation, Query, Args, Resolver } from '@nestjs/graphql';
import { DeleteOutput } from 'src/commons/deleteMessage/Delete.output';
import { Store_Category } from './entities/Store_Category.entity';
import { StoreCategoryService } from './Store_Category.service';

@Resolver()
export class StoreCategoryResolver {
  constructor(private readonly storecategoryService: StoreCategoryService) {}

  @Query(() => Store_Category)
  fetch_category(@Args('storecategoryId') storecategoryId: string) {
    return this.storecategoryService.findOne({ storecategoryId });
  }

  @Query(() => Store_Category)
  fetch_categoryAll() {
    return this.storecategoryService.findAll();
  }

  @Mutation(() => Store_Category)
  create_category(@Args('storecategoryName') storecategoryName: string) {
    return this.storecategoryService.create({ storecategoryName });
  }

  @Mutation(() => Store_Category)
  modify_category(
    @Args('storecategoryId') storecategoryId: string,
    @Args('storecategoryName') storecategoryName: string,
  ) {
    return this.storecategoryService.modify({
      storecategoryId,
      storecategoryName,
    });
  }
  @Mutation(() => DeleteOutput || Boolean)
  delete_category(@Args('storecategoryName') storecategoryName: string) {
    return this.storecategoryService.delete({ storecategoryName });
  }
}
