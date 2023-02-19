import { Field, ObjectType } from '@nestjs/graphql';
import { Customer } from 'src/apis/Customer/entities/Customer.entity';
import { Store } from 'src/apis/Store/entities/Store.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  order_id: string;

  @ManyToOne(() => Store)
  @Field(() => Store)
  store_id: Store;

  @ManyToOne(() => Customer)
  @Field(() => Customer)
  customer_id: Customer;

  @CreateDateColumn()
  order_date: Date;

  @Column({ default: false })
  @Field(() => Boolean)
  order_state: boolean;
}
