import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserAdress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressLine: string;

  @Column()
  city: string;

  @Column()
  postalCode: number;

  @Column()
  country: string;

  @ManyToOne(() => User, (user) => user.userAddresses)
  user: User;
}
