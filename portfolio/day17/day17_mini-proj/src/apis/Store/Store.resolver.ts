import { Mutation, Args, Query, Resolver } from '@nestjs/graphql';
import { DeleteOutput } from 'src/commons/deleteMessage/Delete.output';
import { CreateStoreInput } from './dto/CreateStore.input';
import { UpdateStoreInput } from './dto/UpdateStore.input';
import { Store } from './entities/Store.entity';
import { StoreSerivce } from './Store.service';

@Resolver()
export class StoreResolver {
  constructor(private readonly storeService: StoreSerivce) {}

  @Mutation(() => Store || DeleteOutput)
  async createStore(
    @Args('createStoreInput') createStoreInput: CreateStoreInput,
  ) {
    return await this.storeService.create({ createStoreInput });
  }

  @Mutation(() => Store)
  async modifyStore(
    @Args('storeId') storeId: string,
    @Args('updateStoreInput') updateStoreInput: UpdateStoreInput,
  ) {
    return await this.storeService.modify({ storeId, updateStoreInput });
  }

  @Mutation(() => DeleteOutput || Boolean)
  async deleteStore(@Args('storeId') storeId: string) {
    return await this.storeService.delete({ storeId });
  }

  @Query(() => Store)
  async fetchStore(@Args('storeId') storeId: string) {
    return await this.storeService.findOne({ storeId });
  }

  @Query(() => Store)
  async fetchStoreAll() {
    return await this.storeService.findAll();
  }
}
