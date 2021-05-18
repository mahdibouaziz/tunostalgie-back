import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../entities/product.entity';

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

  @Column('boolean', { default: true })
  active: boolean;

  @OneToMany(() => Product, (product) => product.discount)
  products: Product[];

  @BeforeInsert()
  beforeInsertActions() {
    this.active = true;
  }
}
