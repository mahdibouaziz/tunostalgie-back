import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discount } from './product-discount/entities/discount.entity';
import { Product } from './entities/product.entity';
import { ProductCategory } from './products-category/entities/product-category.entity';
import { ProductCategoryController } from './products-category/product-category.controller';
import { ProductCategoryService } from './products-category/product-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Discount, Product, ProductCategory])],
  controllers: [ProductsController, ProductCategoryController],
  providers: [ProductsService, ProductCategoryService],
})
export class ProductsModule {}
