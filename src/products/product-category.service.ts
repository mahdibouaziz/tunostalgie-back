import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ProductCategory } from './entities/product-category.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async createProductCategory(
    createProductCategoryDto: CreateProductCategoryDto,
  ): Promise<ProductCategory> {
    try {
      return await this.productCategoryRepository.save(
        createProductCategoryDto,
      );
    } catch (error) {
      throw new BadRequestException('Cannot save this product to the Database');
    }
  }

  async findAllProductsCategory(): Promise<ProductCategory[]> {
    try {
      return await this.productCategoryRepository.find();
    } catch (error) {
      throw new BadRequestException('Cannot find products from the Database');
    }
  }

  async findProductCategoryById(id: number): Promise<ProductCategory> {
    try {
      return await this.productCategoryRepository.findOne(id);
    } catch (error) {
      throw new BadRequestException(
        'Cannot find this products or maybe invalid id',
      );
    }
  }

  async updateProductCategory(
    id: number,
    updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    try {
      return await this.productCategoryRepository.update(
        id,
        updateProductCategoryDto,
      );
    } catch (error) {
      throw new BadRequestException(
        'Cannot Update this product or maybe invalid product id',
      );
    }
  }

  async removeProductCategory(id: number) {
    try {
      return await this.productCategoryRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(
        'Cannot remove this product or maybe invalid id',
      );
    }
  }
}
