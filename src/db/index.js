import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';


const connectDB=async ()=>{
    try {
        const conninstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('\n MongoDB connected !! DB HOST: ${conninstance.connection.host}');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export default connectDB;


/*import express from "express";
const app=express()
(async () => {
    try {
        await mongoose.connect('${process.env.MONODB_URI}/${DB_NAME}')
        app.on("error",(error)=>{
            console.log("Error speaking to database:",error);
            throw error;
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.log('Error connecting to MongoDB:', error);
        throw error;
    }
})()*/