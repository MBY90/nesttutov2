import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomerAccountMiddelware } from './middleware/validate-customer-account.middelware';
import { validateCustomerMiddelware } from './middleware/validate-customer.middelware';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
configure(consumer: MiddlewareConsumer) {
  consumer.apply(validateCustomerMiddelware,ValidateCustomerAccountMiddelware)
  .exclude({
    path:'api/customers/create',
    method:RequestMethod.POST
  })
  .forRoutes(CustomersController)
}
}
