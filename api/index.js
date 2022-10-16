
import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from 'cors'


const app = express();
app(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


app.listen(6000, () => {
    console.log("Connected!");
  });