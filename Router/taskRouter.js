"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Taskcontroler_1 = require("../controller/Taskcontroler");
const router = (0, express_1.Router)();
router.route("/").get(Taskcontroler_1.getTask);
router.route("/").post(Taskcontroler_1.createTask);
// router.post(createTask)
router.route("/:id").get(Taskcontroler_1.getOneTask);
router.route("/").patch(Taskcontroler_1.updateTask);
router.route("/").delete(Taskcontroler_1.DeleteTasK);
// .delete(DeleteTasK)
exports.default = router;
