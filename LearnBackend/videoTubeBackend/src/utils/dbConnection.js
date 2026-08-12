import mongoose from "mongoose";
import { DB_NAME } from "../constants";

export const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("DB Connected SUccessfully \n Connection Host : "+connectionInstance.connection.host);
    }catch(error){
        console.log("Connection Failed \n"+error.message);
        process.exit(1);
    }
}

