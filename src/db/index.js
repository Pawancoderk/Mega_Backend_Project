import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectdb = async()=>{
 try {
   const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
   console.log(`MONGODB connected HOST:${connectioninstance.connection.host}`);
   
 } catch (error) {
    console.log("MONGODB connection error",error);
    
 }
}

export default connectdb