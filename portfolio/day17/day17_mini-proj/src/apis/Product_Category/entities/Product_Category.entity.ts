import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/Product/entities/Product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product_Category {
  @PrimaryGeneratedColumn('uuid')
  // @Field(() => String)
  @ManyToMany(() => Product, (product) => product.category_id)
  product_category_id: Product[];

  @Column()
  @Field(() => String)
  product_category_name: string;
}
