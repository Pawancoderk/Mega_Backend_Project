import { app } from "./app.js";
import connectdb from "./db/index.js";

import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})

connectdb()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
    
  })  
})
.catch((error)=>{
    console.log("MONGODB connection failed",error);
    
})