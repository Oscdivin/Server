import mongoose from "mongoose";
import { boolean } from "yup";

interface iAuth{
        userName?:string,
        Email?: string
        password?:boolean,
//         avatar?>String,
}
interface iAuthData extends iAuth,  mongoose.Document{}

const authModel = new mongoose.Schema({
        userName:{
                type:String,
        },
          Email:{
          type:String,
  },
    password:{
          type: String,
  },
//     avatar:{
//         type: String,
// },
},
  {timestamps: true}
)

export default mongoose.model<iAuthData>("auth", authModel)