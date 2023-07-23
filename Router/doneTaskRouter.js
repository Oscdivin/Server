"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const doneTaskcontrooler_1 = require("../controller/doneTaskcontrooler");
const router = (0, express_1.Router)();
router.route("/")
    .get(doneTaskcontrooler_1.getTask)
    .post(doneTaskcontrooler_1.createTask);
router.route("/:id")
    .get(doneTaskcontrooler_1.getOneTask)
    .patch(doneTaskcontrooler_1.updateTask)
    .delete(doneTaskcontrooler_1.DeleteTasK);
exports.default = router;
