"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DoneTask = new mongoose_1.default.Schema({
    priority: {
        type: String,
        unique: true,
    },
    task: {
        type: String,
    },
    isComplete: {
        type: Boolean,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("donetasks", DoneTask);
