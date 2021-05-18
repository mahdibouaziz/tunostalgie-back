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
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { ProductDiscountService } from './product-discount.service';

@Controller('product-discount')
export class ProductDiscountController {
  constructor(private readonly discountService: ProductDiscountService) {}

  @Post()
  createDiscount(@Body() createDiscountDto: CreateDiscountDto) {
    return this.discountService.createDiscount(createDiscountDto);
  }

  @Get()
  findAllDiscounts() {
    return this.discountService.findAllDiscounts();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.discountService.findDiscountById(id);
  }

  @Patch(':id')
  updateDiscount(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDiscountDto: UpdateDiscountDto,
  ) {
    return this.discountService.updateDiscount(id, updateDiscountDto);
  }

  @Delete(':id')
  removeProductCategory(@Param('id', ParseIntPipe) id: number) {
    return this.discountService.removeProductCategory(id);
  }
}
