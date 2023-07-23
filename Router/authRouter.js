"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Taskcontroler_1 = require("../controller/Taskcontroler");
const authcontroller_1 = require("../controller/authcontroller");
const router = (0, express_1.Router)();
router.route("/").get(Taskcontroler_1.getTask);
router.route("/").post(Taskcontroler_1.createTask);
// router.post(createTask)
router.route("/:id").get(Taskcontroler_1.getOneTask);
router.route("/").patch(Taskcontroler_1.updateTask);
router.route("/").delete(Taskcontroler_1.DeleteTasK);
// .delete(DeleteTasK)
router.route("/all-users").get(authcontroller_1.readUser);
router.route("/register").post(authcontroller_1.createAccount);
router.route("/sign-in").post(authcontroller_1.signInAccount);
router.route("/:id/-user-info").get(authcontroller_1.readOneUser);
router.route("/:id/update-user-info").get(authcontroller_1.updateOneUser);
router.route("/:id/delete-users").get(authcontroller_1.deleteOneUser);
exports.default = router;
