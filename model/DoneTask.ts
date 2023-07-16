import mongoose from "mongoose";

interface iTask{
        task?:string,
        priority?:string,
        isComplete?:string,
}
interface iTaskData extends iTask,  mongoose.Document{}

const DoneTask = new mongoose.Schema({
        priority:{
                type:String,
        },
          task:{
          type:String,
  },
    isComplete:{
          type: Boolean,
  },
},
  {timestamps: true}
)

const DoneTaskModels = mongoose.model<iTaskData>("completed",DoneTask)

export default  DoneTaskModels