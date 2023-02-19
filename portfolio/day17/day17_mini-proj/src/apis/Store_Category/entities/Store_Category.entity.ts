import { Field, ObjectType } from '@nestjs/graphql';
import { Franchise } from 'src/apis/Store_Franchise/entities/Store_Franchise.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Store_Category {
  @PrimaryGeneratedColumn('uuid')
  @ManyToMany(() => Franchise, (franchise) => franchise.store_category_id)
  store_category_id: Franchise[];

  @Column()
  @Field(() => String)
  store_category_name: string;
}
