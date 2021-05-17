import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Discount } from './discount.entity';
import { ProductCategory } from './product-category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imagePath: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.products,
  )
  productCategory: ProductCategory;

  @ManyToOne(() => Discount, (discount) => discount.products)
  discount: Discount;
}
