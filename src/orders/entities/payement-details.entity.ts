import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PayementDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  provider: string;

  @Column()
  status: string;
}
