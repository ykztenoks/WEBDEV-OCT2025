import { Schema, model } from "mongoose"

const postModel = new Schema({
  owner: { type: Schema.ObjectId },
  title: { type: String, required: true },
  text: { type: String, required: true },
})

export default model("post", postModel)
