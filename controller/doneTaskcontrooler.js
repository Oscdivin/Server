"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTasK = exports.updateTask = exports.getTask = exports.getOneTask = exports.createTask = void 0;
const DoneTask_1 = __importDefault(require("../model/DoneTask"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority, isComplete } = req.body;
        const tasked = yield DoneTask_1.default.create({
            task, priority, isComplete
        });
        return res.status(201).json({
            message: "task created",
            data: tasked
        });
    }
    catch (error) {
        res.status(404).json({
            message: "not found"
        });
    }
});
exports.createTask = createTask;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield DoneTask_1.default.findById(id);
        return res.status(201).json({
            message: "task created",
            data: tasked
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be created"
        });
    }
});
exports.getOneTask = getOneTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield DoneTask_1.default.find().sort({ createdAt: -1 });
        console.log("show");
        return res.status(200).json({
            message: "can see all task",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "nt found",
            data: error.message
        });
    }
});
exports.getTask = getTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield DoneTask_1.default.findByIdAndUpdate(id, { isComplet: true }, { new: true });
        return res.status(201).json({
            message: "task updateTask",
            data: tasked
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Task cannot be updateTask"
        });
    }
});
exports.updateTask = updateTask;
const DeleteTasK = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield DoneTask_1.default.findByIdAndDelete(id);
        return res.status(201).json({
            message: "task deleted",
            data: tasked
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be delete"
        });
    }
});
exports.DeleteTasK = DeleteTasK;
