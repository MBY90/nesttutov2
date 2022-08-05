import { Injectable } from '@nestjs/common';
import { CreateCustomersDto } from 'src/customers/dtos/CreateCustomers.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
private customers:Customer[]=[
        {
            id:1,
            email:"med@med.com",
            name:"med med"
        },
        {
            id:2,
            email:"test@med.com",
            name:"test test"
        },
        {
            id:3,
            email:"abc@med.com",
            name:"abc abc"
        }
        
    ]
    findCustomerById(id:number){
   return this.customers.find(user=>user.id===id)
    }
    createCustomer(customerDto:CreateCustomersDto){
        this.customers.push(customerDto)
    }

    getCustomers(){
        return this.customers
    }
}