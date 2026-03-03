import express from "express"
import Post from "../models/post.model.js"
import verifyExpressJwt from "../middleware/isAuthExpressJWT.js"

const router = express.Router()

router.post("/create", verifyExpressJwt, async (req, res) => {
  try {
    const created = await Post.create({ ...req.body, owner: req.auth._id })

    return res.status(201).json(created)
  } catch (error) {
    console.log(error)
  }
})

export default router
