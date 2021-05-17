import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserAdress } from './user-address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  telephone: string;

  @OneToMany(() => UserAdress, (userAdress) => userAdress.user)
  userAddresses: UserAdress[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
