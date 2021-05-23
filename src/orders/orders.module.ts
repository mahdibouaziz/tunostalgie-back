import { Module } from '@nestjs/common';
import { OrdersService } from './order/orders.service';
import { OrdersController } from './order/orders.controller';
import { OrderItemsController } from './order-items/order-items.controller';
import { OrderItemsService } from './order-items/order-items.service';
import { PayementDetailsController } from './payement-details/payement-details.controller';
import { PayementDetailsService } from './payement-details/payement-details.service';

@Module({
  controllers: [
    OrdersController,
    OrderItemsController,
    PayementDetailsController,
  ],
  providers: [OrdersService, OrderItemsService, PayementDetailsService],
})
export class OrdersModule {}
