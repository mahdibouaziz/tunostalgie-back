import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItems } from '../../order-items/entities/order-items.entity';
import { PayementDetails } from '../../payement-details/entities/payement-details.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @Column()
  etat: string;

  @OneToMany(() => OrderItems, (orderItems) => orderItems.order)
  orderItems: OrderItems[];

  @OneToOne(() => PayementDetails)
  @JoinColumn()
  payementDetails: PayementDetails;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
