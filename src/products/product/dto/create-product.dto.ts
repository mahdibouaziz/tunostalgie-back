import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  imagePath: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  quantity: number;
}
