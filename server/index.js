import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./Routes/route.js"
import cors from 'cors'
dotenv.config()




const app = express();
app.use(cors());
app.use(express.json())
app.use("/info",route)
const connect=async()=>{
    try{
        await mongoose.connect(process.env.mongo)
        console.log("database is connected")
    }catch(err){
        console.log(err)
    }
}



app.listen(5000,()=>{ 
    connect();
    console.log("server is running")
})