import { IsNotEmpty } from 'class-validator';

export class CreateDiscountDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  discountPercent: number;

  @IsNotEmpty()
  active: boolean;
}
