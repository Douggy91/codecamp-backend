import { Module } from '@nestjs/common';
import { StarbucksResolver } from './starbucks.resolver';
import { StarbucksService } from './starbucks.service';

@Module({
  providers: [StarbucksResolver, StarbucksService],
})
export class StarbucksModule {}
