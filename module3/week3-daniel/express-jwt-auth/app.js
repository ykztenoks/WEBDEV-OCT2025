import express from "express";
import * as dotenv from "dotenv";
import { connectdb } from "./db/dbconnect.js";
import authRouter from "./routes/auth.routes.js";
import postRouter from "./routes/post.routes.js";
import morgan from "morgan";
import cors from "cors";

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173";
dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.set("trust proxy", 1);

// controls a very specific header to pass headers from the frontend
app.use(
  cors({
    origin: [FRONTEND_URL],
  }),
);

app.use("/auth", authRouter);
app.use("/posts", postRouter);

app.listen(process.env.PORT, () => {
  console.clear();
  console.log("Server up and running on port: " + process.env.PORT);
  connectdb();
});
