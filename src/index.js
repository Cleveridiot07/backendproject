// require('dotenv').config({path: './env'})
import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${proces.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed",err);
})































// APPROACH 1
// const app = express()

// // professional apporach to write function
// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
//         app.on("error",(error)=>{
//             console.log("ERROR: ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.error("ERROR:",error);
//         throw error;
//     }
// })()