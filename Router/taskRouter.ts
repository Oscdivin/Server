import express, {Router} from "express"
import { DeleteTasK, createTask,  getOneTask,  getTask,  updateTask } from "../controller/Taskcontroler"

const router = Router()
router.route("/").get(getTask)
router.route("/").post(createTask)
// router.post(createTask)

router.route("/:id").get(getOneTask)
router.route("/").patch(updateTask)
router.route("/").delete(DeleteTasK)
// .delete(DeleteTasK)

export default router