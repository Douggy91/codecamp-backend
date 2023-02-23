import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { DeleteOutput } from 'src/commons/deleteMessage/Delete.output';
import { Product_Category } from './entities/Product_Category.entity';
import { ProductCategoryService } from './Product_Category.service';

@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly productcategoryService: ProductCategoryService,
  ) {}

  @Mutation(() => Product_Category)
  async createProductCategory(@Args('categoryName') categoryName: string) {
    return this.productcategoryService.create({ categoryName });
  }

  @Mutation(() => Product_Category || DeleteOutput)
  async modifyProductCategory(
    @Args('categoryId') categoryId: string,
    @Args('categoryName') categoryName: string,
  ) {
    return this.productcategoryService.modify({ categoryId, categoryName });
  }
  @Mutation(() => DeleteOutput)
  async deleteProductCategory(@Args('categoryId') categoryId: string) {
    return this.productcategoryService.delete({ categoryId });
  }

  @Query(() => Product_Category)
  async fetchProductCategory(@Args('categoryId') categoryId: string) {
    return this.productcategoryService.findOne({ categoryId });
  }

  @Query(() => Product_Category)
  async fetchProductCategoryAll() {
    return this.productcategoryService.findAll();
  }
}
