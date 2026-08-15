import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limit: "20kb"}))


app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"], // which method type frontend is allowed to
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true
}));

app.use(cookieParser());






export {app}