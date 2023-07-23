"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRouter_1 = __importDefault(require("./Router/taskRouter"));
const doneTaskRouter_1 = __importDefault(require("./Router/doneTaskRouter"));
// import AutModel from "./model/authModel"
const authRouter_1 = __importDefault(require("./Router/authRouter"));
const mainApp = (app) => {
    app.use(express_1.default.json())
        .use((0, cors_1.default)())
        .use("/api/v1/task/", taskRouter_1.default)
        .use("/api/v1/done/", doneTaskRouter_1.default)
        .use("/api/v1/auth", authRouter_1.default);
    //         .use("/api/v1/done/",authModel)
    // .get(req: Request, res: Response)=>{
};
exports.mainApp = mainApp;
