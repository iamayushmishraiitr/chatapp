import jwt from "jsonwebtoken"
const  jwtMiddleware=(req,res,next)=>{
    const SecretKey = process.env.SECRETKEY ;
    const authHeader = req.headers['token'];
    const token = authHeader ;
    if(!token) res.status(401);

    try{
         jwt.verify(token,SecretKey , (err)=>{
            if(err){
               console.log(err);
               res.status(401);
            }
            else{
                next();
            }
         }) ;
    }
    catch(err)
    {
        console.log(err) ;
        res.status(401).json({error:"Invalid token"})
    }
}
export default jwtMiddleware