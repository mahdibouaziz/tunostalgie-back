import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    try {
      return await this.productRepository.save(createProductDto);
    } catch (error) {
      throw new BadRequestException('Cannot save this product to the Database');
    }
  }

  async findAllProductsCategory(): Promise<Product[]> {
    try {
      return await this.productRepository.find();
    } catch (error) {
      throw new BadRequestException('Cannot find products from the Database');
    }
  }

  async findProductById(id: number): Promise<Product> {
    try {
      return await this.productRepository.findOne(id);
    } catch (error) {
      throw new BadRequestException(
        'Cannot find this products or maybe invalid id',
      );
    }
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.productRepository.update(id, updateProductDto);
    } catch (error) {
      throw new BadRequestException(
        'Cannot Update this product or maybe invalid product id',
      );
    }
  }

  async removeProduct(id: number) {
    try {
      return await this.productRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(
        'Cannot remove this product or maybe invalid id',
      );
    }
  }
}
