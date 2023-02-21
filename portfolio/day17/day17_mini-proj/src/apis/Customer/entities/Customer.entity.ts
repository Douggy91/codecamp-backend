import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  customer_id: string;

  @Column()
  @Field(() => String)
  customer_name: string;

  @Column()
  @Field(() => String)
  passwd: string;

  @Column()
  @Field(() => String)
  phone_num: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  address: string;

  @Column({ default: 1500 })
  @Field(() => Int)
  point: number;

  @CreateDateColumn()
  createDate: Date;

  @DeleteDateColumn()
  isDeleted: Date;
}
