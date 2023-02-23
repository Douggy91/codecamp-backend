import { Field, ObjectType } from '@nestjs/graphql';
import { Franchise } from 'src/apis/Store_Franchise/entities/Store_Franchise.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Store_Category {
  @PrimaryGeneratedColumn('uuid')
  @ManyToMany(() => Franchise, (franchise) => franchise.storecategory_id)
  storecategory_id: Franchise[];

  @Column()
  @Field(() => String)
  storecategory_name: string;

  @DeleteDateColumn()
  isDelete: Date;
}
