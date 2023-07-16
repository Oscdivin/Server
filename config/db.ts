import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const mongooseString: any= process.env.APPLICATIONS_DB_ONLINEII!
console.log(mongooseString);


export const dbConnect=() =>{
        mongoose.connect(mongooseString).then(()=>{
                console.log("connected...", mongooseString)
        })
}