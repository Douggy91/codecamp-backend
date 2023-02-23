import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Order_Product } from 'src/apis/Order_Product/entities/Order_Product.entity';
import { Product_Category } from 'src/apis/Product_Category/entities/Product_Category.entity';
import { Store } from 'src/apis/Store/entities/Store.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  product_id: string;

  @Column()
  @Field(() => String)
  product_name: string;

  @ManyToOne(() => Store)
  @Field(() => Store)
  store_id: Store;

  @JoinTable()
  @ManyToMany(
    () => Product_Category,
    (product_category) => product_category.product_category_id,
  )
  product_category_id: Product_Category[];

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: true })
  @Field(() => Boolean)
  isState: boolean;

  @CreateDateColumn()
  createDate: Date;
}
