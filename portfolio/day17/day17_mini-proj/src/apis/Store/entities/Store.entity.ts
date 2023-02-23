import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Franchise } from 'src/apis/Store_Franchise/entities/Store_Franchise.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  store_id: string;

  @Column()
  @Field(() => String)
  store_name: string;

  @Column()
  @Field(() => String)
  passwd: string;

  @ManyToOne(() => Franchise)
  @Field(() => Franchise)
  franchise_id: Franchise;

  @Column()
  @Field(() => String)
  phone_num: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  address: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isRootStore: boolean;

  @CreateDateColumn()
  enrolled_date: Date;

  @DeleteDateColumn()
  isDeleted: Date;
}
