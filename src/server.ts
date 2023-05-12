import mongoose from "mongoose";
import express from "express";
import UserRouter from "./routers/UserRouter";

const app = express();

const MONGODB_URL = `mongodb+srv://netchainlao:F9LzbfO4HmRzMbCJ@cluster0.6qszaom.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json());

app.use('/user', UserRouter)

app.listen(3000, () => {
    console.log(`listening on port 3000`);
})

mongoose.connect(MONGODB_URL);

mongoose.connection.on(`connected`, () => {
    console.log(`Connected to Mongo`);
});

mongoose.connection.on(`error`, (err) => {
    console.log(`MongoDB connection err: ${err}`);
});
