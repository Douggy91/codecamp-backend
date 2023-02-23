import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteOutput } from 'src/commons/deleteMessage/Delete.output';
import { CreateProductInput } from './dto/CreateProduct.input';
import { UpdateProductInput } from './dto/UpdateProduct.input';
import { Product } from './entities/Product.entity';
import { ProductService } from './Product.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.create({ createProductInput });
  }

  @Mutation(() => Product || DeleteOutput)
  modifyProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.modify({ productId, updateProductInput });
  }

  @Mutation(() => DeleteOutput)
  deleteProduct(@Args('productId') productId: string) {
    return this.productService.delete({ productId });
  }

  @Query(() => Product)
  fetchProduct(@Args('productId') productId: string) {
    return this.productService.findOne({ productId });
  }

  @Query(() => Product)
  fetchProductAll() {
    return this.productService.findAll();
  }
}
