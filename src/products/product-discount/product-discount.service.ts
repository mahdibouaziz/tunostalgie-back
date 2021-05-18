import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Discount } from './entities/discount.entity';

@Injectable()
export class ProductDiscountService {
  constructor(
    @InjectRepository(Discount)
    private discountRepository: Repository<Discount>,
  ) {}

  async createDiscount(
    createDiscountDto: CreateDiscountDto,
  ): Promise<Discount> {
    try {
      return await this.discountRepository.save(createDiscountDto);
    } catch (error) {
      throw new BadRequestException(
        'Cannot save this discount to the Database',
      );
    }
  }

  async findAllDiscounts(): Promise<Discount[]> {
    try {
      return await this.discountRepository.find();
    } catch (error) {
      throw new BadRequestException('Cannot find discounts from the Database');
    }
  }

  async findDiscountById(id: number): Promise<Discount> {
    try {
      return await this.discountRepository.findOne(id);
    } catch (error) {
      throw new BadRequestException(
        'Cannot find this Discount or maybe invalid id',
      );
    }
  }

  async updateDiscount(id: number, updateDiscountDto: UpdateDiscountDto) {
    try {
      return await this.discountRepository.update(id, updateDiscountDto);
    } catch (error) {
      throw new BadRequestException(
        'Cannot Update this Discount or maybe invalid product id',
      );
    }
  }

  async removeProductCategory(id: number) {
    try {
      return await this.discountRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(
        'Cannot remove this Discount or maybe invalid id',
      );
    }
  }
}
