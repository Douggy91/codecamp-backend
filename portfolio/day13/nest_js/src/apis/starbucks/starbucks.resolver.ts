import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateStarbucksInput } from './dto/createStarbucks.Input';
import { Starbucks } from './entities/starbucks.entity';
import { StarbucksService } from './starbucks.service';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks])
  fetchStarbucks() {
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ) {
    console.log(createStarbucksInput);
    return this.starbucksService.create();
  }
}
