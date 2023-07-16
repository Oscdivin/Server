
import express,{Application} from "express"
import { mainApp } from './mainApp';
// import mongoose from "mongoose"
import dotenv from "dotenv"
import { dbConnect } from "./config/db";

dotenv.config()
// cosnt monggoseStringI:string ="mongodb://localhost:2701//ProductivivityDB"

const realPort = parseInt (process.env.APPLICATIONS_POST!)

const port:number=realPort;
const app: Application = express()
const mongooseString:string =process.env.APPLICATIONS_DB!
mainApp(app)

const server =app.listen(port, ()=>{
	dbConnect()
	console.log("server is on");
	  
})
process.on("uncaughtException",(error:any)=>{
        console.log("server is shutting down because of an uncaugh Exception")
        console.log(error)
        process.exit(1)
})
process.on("unhandledRejection",(reason:any)=>{
        console.log("server is shutting down because of an unhandled Rejection")
        console.log("uncaugh Exception",(reason))
        server.close(()=>{
                process.exit(1)
        })
})