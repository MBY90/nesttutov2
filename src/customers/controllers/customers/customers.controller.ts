import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomersDto } from 'src/customers/dtos/CreateCustomers.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService:CustomersService){
          
    }
    @Get(':id')
     getCustomer( 
        @Param('id',ParseIntPipe) id:number,
        
     ){
        console.log(typeof id)
        const customer= this.customersService.findCustomerById(id);
     }
     @Get("/search/:id")
     searchCustomerById(
        @Param('id',ParseIntPipe) id:number,
     ){
        const customer= this.customersService.findCustomerById(id);
        if(customer) return customer;
        else throw new HttpException("Customer not Found!",HttpStatus.BAD_REQUEST)
     }
     @Get('')
     getAllCustomers(){
        return this.customersService.getCustomers();
     }

   @Post('create') 

   createCustomer( @Body() createCustomersDto:CreateCustomersDto ){
    console.log(createCustomersDto)
    this.customersService.createCustomer(createCustomersDto)
   } 
}
