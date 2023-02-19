import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { CustomerModule } from './apis/Customer/Customer.module';

const DBPASSWD: string = process.env.DBPASSWD;
const DBUSER: string = process.env.DBUSER;
const DBHOST: string = process.env.DBHOST;
const DBDATABASE: string = process.env.DBDATABASE;

@Module({
  imports: [
    CustomerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DBHOST,
      port: 3306,
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
