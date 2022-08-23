import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePsws } from 'src/utils/bycrpt';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') private readonly userSerice:UsersService){

    }
    async validateUser(username:string,password:string){
        console.log('inside validated user')
const userDB=await this.userSerice.findUserByUserName(username)
if(userDB && userDB.password===password){
    const matched =comparePsws(password,userDB.password)
    if(matched){
        console.log("success" );
        return  userDB
    }else{
        console.log("psw do not match")
        return null
    }

}
return null
    }
}
 