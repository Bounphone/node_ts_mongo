"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const UserRouter_1 = __importDefault(require("./routers/UserRouter"));
const app = (0, express_1.default)();
const MONGODB_URL = `mongodb+srv://netchainlao:F9LzbfO4HmRzMbCJ@cluster0.6qszaom.mongodb.net/?retryWrites=true&w=majority`;
app.use(express_1.default.json());
app.use('/user', UserRouter_1.default);
app.listen(3000, () => {
    console.log(`listening on port 3000`);
});
mongoose_1.default.connect(MONGODB_URL);
mongoose_1.default.connection.on(`connected`, () => {
    console.log(`Connected to Mongo`);
});
mongoose_1.default.connection.on(`error`, (err) => {
    console.log(`MongoDB connection err: ${err}`);
});
