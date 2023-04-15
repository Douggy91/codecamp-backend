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
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return await this.productService.create({ createProductInput });
  }

  @Mutation(() => Product)
  async modifyProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    await this.productService.isValid({ productId });
    return this.productService.modify({ productId, updateProductInput });
  }

  @Mutation(() => DeleteOutput)
  deleteProduct(@Args('productId') productId: string) {
    return this.productService.delete({ productId });
  }

  @Query(() => Product)
  async fetchProduct(@Args('productId') productId: string) {
    await this.productService.isValid({ productId });
    return this.productService.findOne({ productId });
  }

  @Query(() => Product)
  fetchProductAll() {
    return this.productService.findAll();
  }
}
