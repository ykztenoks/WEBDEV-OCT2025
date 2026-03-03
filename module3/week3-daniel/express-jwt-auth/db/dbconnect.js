import mongoose from "mongoose"

export const connectdb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Connected to db: ${connection.connections[0].name}`)
  } catch (error) {
    console.log(error)
  }
}
