"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = require("./mainApp");
// import mongoose from "mongoose"
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
dotenv_1.default.config();
// cosnt monggoseStringI:string ="mongodb://localhost:2701//ProductivivityDB"
const realPort = parseInt(process.env.APPLICATIONS_POST);
const port = realPort;
const app = (0, express_1.default)();
const mongooseString = process.env.APPLICATIONS_DB;
(0, mainApp_1.mainApp)(app);
const server = app.listen(port, () => {
    (0, db_1.dbConnect)();
    console.log("server is on");
});
process.on("uncaughtException", (error) => {
    console.log("server is shutting down because of an uncaugh Exception");
    console.log(error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("server is shutting down because of an unhandled Rejection");
    console.log("uncaugh Exception", (reason));
    server.close(() => {
        process.exit(1);
    });
});
