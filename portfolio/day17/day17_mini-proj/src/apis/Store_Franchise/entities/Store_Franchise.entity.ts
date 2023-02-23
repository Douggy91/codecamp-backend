import { Field, ObjectType } from '@nestjs/graphql';
import { Store_Category } from 'src/apis/Store_Category/entities/Store_Category.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Franchise {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  franchise_id: string;

  @Column()
  @Field(() => String)
  franchise_name: string;

  @JoinTable()
  @ManyToMany(
    () => Store_Category,
    (storecategory) => storecategory.storecategory_id,
  )
  storecategory_id: Store_Category[];

  @DeleteDateColumn()
  isDelete: Date;
}
