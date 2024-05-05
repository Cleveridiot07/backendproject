import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log(`|n MONGO DB CONNECTED!! ${
            connectionInstance.connection.host
        }`)
    }catch(error){
        console.log("Connection Error: ",error);
        // exit codes in nodejs
        process.exit(1);
    }
}

export default connectDB;