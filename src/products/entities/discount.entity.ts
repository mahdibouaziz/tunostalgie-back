import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  discountPercent: number;

  @Column()
  active: boolean;

  @OneToMany(() => Product, (product) => product.discount)
  products: Product[];
}
