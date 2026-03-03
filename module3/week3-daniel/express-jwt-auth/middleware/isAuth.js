import jwt from "jsonwebtoken"

const verify = async (req, res, next) => {
  try {
    if (
      req.headers.authorization.split(" ")[0] === "Bearer" &&
      req.headers.authorization.split(" ")[1]
    ) {
      const token = req.headers.authorization.split(" ")[1]
      const payload = jwt.verify(token, process.env.TOKEN_SECRET)

      req.payload = payload
      next()
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "No token found" })
  }
}
export default verify
