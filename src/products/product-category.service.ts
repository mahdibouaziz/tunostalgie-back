import { Injectable } from '@nestjs/common';
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
    return await this.productCategoryRepository.save(createProductCategoryDto);
  }

  async findAllProductsCategory(): Promise<ProductCategory[]> {
    return await this.productCategoryRepository.find();
  }

  async findProductCategoryById(id: number): Promise<ProductCategory> {
    return await this.productCategoryRepository.findOne(id);
  }

  async updateProductCategory(
    id: number,
    updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    return await this.productCategoryRepository.update(
      id,
      updateProductCategoryDto,
    );
  }

  async removeProductCategory(id: number) {
    return await this.productCategoryRepository.delete(id);
  }
}
