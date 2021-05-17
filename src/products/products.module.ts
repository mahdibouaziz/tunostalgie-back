import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discount } from './entities/discount.entity';
import { Product } from './entities/product.entity';
import { ProductCategory } from './entities/product-category.entity';
import { ProductCategoryController } from './product-category.controller';
import { ProductCategoryService } from './product-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Discount, Product, ProductCategory])],
  controllers: [ProductsController, ProductCategoryController],
  providers: [ProductsService, ProductCategoryService],
})
export class ProductsModule {}
