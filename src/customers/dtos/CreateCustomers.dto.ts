import { IsEmail,IsNumberString ,IsNotEmpty,ValidateNested,} from 'class-validator';
import {Type} from 'class-transformer'
import { CreateAdressDto } from './CreateAdressDto';
export class CreateCustomersDto{
@IsEmail()
email:string;
@IsNumberString()
@IsNotEmpty()
    id:number;
@IsNotEmpty()
    name:string
@ValidateNested()
@Type(()=>CreateAdressDto)
@IsNotEmpty()
adress:CreateAdressDto
}

