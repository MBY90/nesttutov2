import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, UseFilters, UseInterceptors } from '@nestjs/common';
import { UserNotFoundExeption } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExecptionFilter } from 'src/users/filter/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';


@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE')
    private readonly userService :UsersService ){

    }
    @Get('')
    getUsers(){
       return this.userService.getUsers()
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get("/:username")
    getByUsername(@Param('username') username:string){
const user= this.userService.getUserByUserName(username)
if(user) return new SerializedUser(user)
else  throw new HttpException('user not found',HttpStatus.BAD_REQUEST)
 
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExecptionFilter)
    @Get('id/:id')
    getById(@Param('id',ParseIntPipe) id:number){
const user =this.userService.getUserById(id);
if(user) return new SerializedUser(user);
else {
    throw new UserNotFoundExeption()
}
    }
 
}
