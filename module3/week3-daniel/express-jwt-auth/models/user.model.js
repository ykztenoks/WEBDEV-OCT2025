import { Schema, model } from "mongoose"

const userSchema = new Schema({
  username: { type: String, maxLength: 24, minLength: 3, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
})

export default model("user", userSchema)
