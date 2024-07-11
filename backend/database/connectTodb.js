import mongoose  from "mongoose";
const connectTodb=async()=>{
    try {
        await mongoose.connect(process.env.MongoURl) ;
        console.log("connected To mongoDB") ;
    } catch (error) {
        console.log("FAILED TO CONNECT" , error)
    } 
}
export default connectTodb ;