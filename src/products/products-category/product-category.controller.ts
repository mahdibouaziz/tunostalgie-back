import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ProductCategory } from './entities/product-category.entity';
import { ProductCategoryService } from './product-category.service';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post()
  createProductCategory(
    @Body() createProductCategoryDto: CreateProductCategoryDto,
  ): Promise<ProductCategory> {
    return this.productCategoryService.createProductCategory(
      createProductCategoryDto,
    );
  }

  @Get()
  findAllProductsCategory(): Promise<ProductCategory[]> {
    return this.productCategoryService.findAllProductsCategory();
  }

  @Get('/:id')
  findProductCategoryById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProductCategory> {
    return this.productCategoryService.findProductCategoryById(id);
  }

  @Delete('/:id')
  removeProductCategory(@Param('id', ParseIntPipe) id: number) {
    return this.productCategoryService.removeProductCategory(id);
  }

  @Patch(':id')
  updateProductCategoryDto(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    return this.productCategoryService.updateProductCategory(
      id,
      updateProductCategoryDto,
    );
  }
}
