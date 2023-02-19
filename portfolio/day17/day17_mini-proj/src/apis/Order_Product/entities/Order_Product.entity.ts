import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Order } from 'src/apis/Order/entities/Order.entity';
import { Product } from 'src/apis/Product/entities/Product.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Order_Product {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  no: number;

  @ManyToOne(() => Order)
  @Field(() => Order)
  order_id: Order;

  @ManyToMany(() => Product, (product) => product.product_id)
  product_id: Product[];

  @Column()
  @Field(() => Int)
  order_cnt: number;
}
