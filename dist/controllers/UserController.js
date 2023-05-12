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
exports.deleteUser = exports.updateUser = exports.getOneUser = exports.getAllUsers = exports.newUser = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.create(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
});
exports.newUser = newUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.find();
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
});
exports.getAllUsers = getAllUsers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield UserModel_1.default.findById(id).exec();
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
});
exports.getOneUser = getOneUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(203).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.findByIdAndDelete(req.params.id).exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).send(`User deleted successfully`);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal Server Error` });
    }
});
exports.deleteUser = deleteUser;
