import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';
import {plainToClass} from 'class-transformer'
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRespo:Repository<UserEntity>)
    {

    }
    private users:User[]=[
        
        {
            id:1,
            username:"med",
            password:"med"
        },
        {
            id:2,
            username:"youssef",
            password:"youssef"
        },
        {
            id:3,
            username:"test",
            password:"test"
        }, 
            ]
            getUsers(){
                return this.users.map((user)=>plainToClass(SerializedUser,user)
                );
            }
            getUserByUserName(username:string){
               return this.users.find((user)=>user.username===username)
            }
            getUserById(id:number){
            return this.users.find((user)=>user.id==id)    
            }
            createUser(createUserDto:CreateUserDto ){
              const newUser= this.userRespo.create(createUserDto);
              return this.userRespo.save(newUser)
            }
    findUserByUserName(username:string){
        return this.userRespo.findOneBy({username})
    }
}
