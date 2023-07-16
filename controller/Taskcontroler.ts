import express,{Request,Response} from "express"
import taskModel from "../model/Taskmodel"

export const createTask = async(req: Request, res:Response)=>{
        try {
              
              const {task, priority, isComplete} =req.body;
              const tasked = await taskModel.create({
                task, priority, isComplete
              })
              return res.status(201).json({
                message: "task created",
                data:tasked
              })
        } catch (error) {
                  res.status(404).json({
                        message:"not found"
                  })
        }
}


export const getOneTask = async(req:Request, res:Response):Promise<Response>=>{
        try {
              
              const {id} =req.params;
              const tasked = await taskModel.findById(id)

              
              return res.status(200).json({
                message: "task created",
                data:tasked
              })
        } catch (error) {
                return  res.status(404).json({
                        message:"Task cannot be gotend"
                  })
        }
}

export const getTask =async (req:Request , res:Response):Promise<Response>=>{
        try {
               const tasked =await taskModel.find().sort({createdAt:-1})
                console.log("show")
               return res.status(200).json({
                message:"can see all task" ,
                data: tasked,
               }) 
        } catch (error) {
         return res.status(404).json({
                message:"nt found" ,
                data:error.message
         })       
        }
}
     


export const updateTask = async(req: Request, res:Response)=>{
        try {
              
              const {id} =req.params;
              const tasked = await taskModel.findByIdAndUpdate(
	id,
	{isComplet: true},
	{new:true}
              )
              return res.status(201).json({
                message: "task updateTask",
                data:tasked
              })
        } catch (error) {
                  res.status(404).json({
                              message:"Task cannot be updateTask"
                  })
        }
}

export const DeleteTasK = async(req: Request, res:Response):Promise<Response>=>{
        try {
              
              const {id} =req.params;
              const tasked = await taskModel.findByIdAndDelete(id)
              return res.status(201).json({
                message: "task deleted",
                data:tasked
              })
        } catch (error) {
                 return res.status(404).json({
                         message:"Task cannot be delete"
                  })
        }
}