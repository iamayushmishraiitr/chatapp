import jwt  from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config() 
const secretkey = process.env.Secret ; 
const generateToke= (email ,username)=>{
    const token=  jwt.sign({
        email: email ,
        username:username 
    },
    secretkey ,
    { expiresIn: '3d' }
) ;
 return token ;
}
export default generateToke ;