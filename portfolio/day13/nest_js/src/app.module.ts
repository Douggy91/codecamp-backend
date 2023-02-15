import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Starbucks } from './apis/starbucks/entities/starbucks.entity';
import { StarbucksModule } from './apis/starbucks/starbucks.module';
import 'dotenv/config';
// dotenv.config();
const DBPASSWD: string = process.env.DBPASSWD;
const DBUSER: string = process.env.DBUSER;
const DBHOST: string = process.env.DBHOST;
const DBDATABASE: string = process.env.DBDATABASE;

@Module({
  imports: [
    StarbucksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DBHOST,
      port: 3306,
      username: DBUSER,
      password: DBPASSWD,
      database: DBDATABASE,
      entities: [Starbucks],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}

// query { fetchStarbucks { menu, price, kcal, saturted_fat, protein, salt, sugar, caffeine }}
// mutation { createStarbucks(createStarbucksInput: {menu:"아포카토", price: 6500, kcal: 230, saturted_fat: 100, protein:10, salt:15, sugar:150, caffeine:80})}
