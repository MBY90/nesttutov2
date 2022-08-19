import * as bcrypt from 'bcrypt';
const salt=10;
export function encodedPsw(rawPsw:string){
 const hash =bcrypt.hashSync (rawPsw,salt)
 return hash
}
