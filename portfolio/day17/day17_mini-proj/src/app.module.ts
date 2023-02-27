import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { CustomerModule } from './apis/Customer/Customer.module';
import { OrderModule } from './apis/Order/Order.module';
import { OrderProductModule } from './apis/Order_Product/Order_Product.module';
import { ProductModule } from './apis/Product/Product.module';
import { ProductCategoryModule } from './apis/Product_Category/Product_Category.module';
import { StoreModule } from './apis/Store/Store.module';
import { Store_CategoryModule } from './apis/Store_Category/Store_Category.module';
import { FranchiseModule } from './apis/Store_Franchise/Store_Frachise.module';

const DBPASSWD: string = process.env.DBPASSWD;
const DBUSER: string = process.env.DBUSER;
const DBHOST: string = process.env.DBHOST;
const DBDATABASE: string = process.env.DBDATABASE;

@Module({
  imports: [
    CustomerModule,
    OrderModule,
    FranchiseModule,
    StoreModule,
    Store_CategoryModule,
    ProductCategoryModule,
    ProductModule,
    OrderProductModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DBHOST,
      port: 3333,
      username: DBUSER,
      password: DBPASSWD,
      database: DBDATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
