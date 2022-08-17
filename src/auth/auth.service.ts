import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') private readonly userSerice:UsersService){

    }
    async validateUser(username:string,password:string){
const userDB=await this.userSerice.findUserByUserName(username)
if(userDB){
    console.log(userDB);
}
    }
}
 