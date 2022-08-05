import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';
import {plainToClass} from 'class-transformer'
@Injectable()
export class UsersService {
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
}
