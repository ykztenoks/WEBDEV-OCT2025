import express from "express"
import * as dotenv from "dotenv"
import { connectdb } from "./db/dbconnect.js"
import authRouter from "./routes/auth.routes.js"
import postRouter from "./routes/post.routes.js"
import morgan from "morgan"

dotenv.config()

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/auth", authRouter)
app.use("/posts", postRouter)

app.listen(process.env.PORT, () => {
  console.clear()
  console.log("Server up and running on port: " + process.env.PORT)
  connectdb()
})
