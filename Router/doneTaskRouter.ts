import express, {Router} from "express"
import { DeleteTasK, createTask,  getOneTask,  getTask,  updateTask } from "../controller/doneTaskcontrooler"

const router = Router()
router.route("/")
.get(getTask)
.post(createTask)

router.route("/:id")
.get(getOneTask)
.patch(updateTask)
.delete(DeleteTasK)

export default router