import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:'./env'
})

connectDB()

 .then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
 })
.catch((error)=>{
    console.error('Error connecting to MongoDB:', error);
    throw error;
})