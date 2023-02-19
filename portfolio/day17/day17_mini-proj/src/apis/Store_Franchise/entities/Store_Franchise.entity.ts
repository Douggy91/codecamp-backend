import { Field, ObjectType } from '@nestjs/graphql';
import { Store } from 'src/apis/Store/entities/Store.entity';
import { Store_Category } from 'src/apis/Store_Category/entities/Store_Category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
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
    (store_category) => store_category.store_category_id,
  )
  store_category_id: Store_Category[];

  @JoinColumn()
  @OneToOne(() => Store)
  @Field(() => Store)
  root_store_id: Store;
}
