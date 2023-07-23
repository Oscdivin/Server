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
exports.signInAccount = exports.createAccount = exports.deleteOneUser = exports.updateOneUser = exports.readOneUser = exports.readUser = void 0;
const authModel_1 = __importDefault(require("../model/authModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const readUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authModel_1.default.find();
        return res.status(200).json({
            message: "Get all Users",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.readUser = readUser;
const readOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield authModel_1.default.findById(id);
        return res.status(200).json({
            message: "Get One Users",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.readOneUser = readOneUser;
const updateOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { userName, avatar } = req.body;
        const user = yield authModel_1.default.findByIdAndUpdate(id, { userName, avatar }, { new: true });
        return res.status(201).json({
            message: "Account Updated",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.updateOneUser = updateOneUser;
const deleteOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield authModel_1.default.findByIdAndDelete(id);
        return res.status(201).json({
            message: "Account Deleted",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.deleteOneUser = deleteOneUser;
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, avatar, email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield authModel_1.default.create({
            email,
            password: hash,
            userName,
            avatar,
        });
        return res.status(201).json({
            message: "Account Created",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.createAccount = createAccount;
const signInAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield authModel_1.default.findOne({ email });
        if (password)
            return res.status(201).json({
                message: `welcome back ${user === null || user === void 0 ? void 0 : user.userName},`,
                data: user === null || user === void 0 ? void 0 : user._id
            });
        return res.status(201).json({ message: `welcome back divine$` });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.signInAccount = signInAccount;
// import express, { Request, Response } from "express";
// import authModel from "../model/authModel";
// import bcrypt from "bcrypt";
// import { number } from "yup";
// export const readUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const user = await authModel.find();
//     return res.status(200).json({
//       message: "Get all Users",
//       data: user,
//     });
//   } catch (error) {
//     return res.status(404).json({ message: error.massage });
//   }
// };
// export const readOneUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { id } = req.params;
//     const user = await authModel.findById(id);
//     return res.status(200).json({
//       message: "Get One Users",
//       data: user,
//     });
//   } catch (error) {
//     return res.status(404).json({ message: error.massage });
//   }
// };
// export const updateOneUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { id } = req.params;
//     const { userName, avatar } = req.body;
//     const user = await authModel.findByIdAndUpdate(
//       id,
//       { userName, avatar },
//       { new: true }
//     );
//     return res.status(201).json({
//       message: "Account Upadted",
//       data: user,
//     });
//   } catch (error) {
//     return res.status(404).json({ message: error.massage });
//   }
// };
// export const deleteOneUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { id } = req.params;
//     const user = await authModel.findByIdAndDelete(id);
//     return res.status(200).json({
//       message: "Account Deleted",
//       data: user,
//     });
//   } catch (error) {
//     return res.status(404).json({ message: error.massage });
//   }
// };
// export const createAccount = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { userName, avatar, email, password } = req.body;
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);
//     const user = await authModel.create({
//       email,
//       password: hash,
//       userName,
//       avatar,
//     });
//     return res.status(201).json({
//       message: "Account Created",
//       data: user,
//     });
//   } catch (error) {
//     return res.status(404).json({ message: error.massage });
//   }
// };
// export const signInAccount = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { email, password } = req.body;
//     const user = await authModel.findOne({
//       email
//     });
//     if (user) {
// //       const passed = await bcrypt.compare(password, user?.password!);
//       if (passed) {
//         return res.status(201).json({
//           message: `Welcome back ${user.userName}`,
//         });
//       } else {
//         return res.status(404).json({
//           message: "Password is incorrect",
//         });
//       }
//     } else {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }
//   } catch (error) {
//     return res.status(404).json({ message: error.message });
//   }
// };
