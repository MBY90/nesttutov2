import {IsNotEmpty,IsNotEmptyObject} from 'class-validator'
export class CreateAdressDto{
    @IsNotEmpty()
    line1:string;
    line2:string;
    @IsNotEmpty()
    zip:string;
    @IsNotEmpty()
    city:string;
    @IsNotEmptyObject()
    state:string;
}