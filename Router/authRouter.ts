import express, {Router} from "express"
import { DeleteTasK, createTask,  getOneTask,  getTask,  updateTask } from "../controller/Taskcontroler"
import { createAccount, deleteOneUser, readOneUser, readUser, signInAccount, updateOneUser } from '../controller/authcontroller';

const router = Router()
router.route("/").get(getTask)
router.route("/").post(createTask)
// router.post(createTask)

router.route("/:id").get(getOneTask)
router.route("/").patch(updateTask)
router.route("/").delete(DeleteTasK)
// .delete(DeleteTasK)

router.route("/all-users").get(readUser);
router.route("/register").post(createAccount);
router.route("/sign-in").post(signInAccount);


router.route("/:id/-user-info").get(readOneUser);
router.route("/:id/update-user-info").get(updateOneUser);
router.route("/:id/delete-users").get(deleteOneUser);


export default router
