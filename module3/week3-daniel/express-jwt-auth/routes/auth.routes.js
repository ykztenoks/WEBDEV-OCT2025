import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verify from "../middleware/isAuth.js";
import verifyExpressJWT from "../middleware/isAuthExpressJWT.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //make sure all info is sent from client
    if (!username || !email || !password) {
      return res.status(500).json({ message: "Please provide all info" });
    }

    //we are registering a user, so if found with provided info, user already exists
    const foundUser = await User.findOne({ $or: [{ email }, { username }] });
    if (foundUser) {
      console.log("inside the signup", foundUser);
      return res
        .status(500)
        .json({ errorMessage: "Email or username already taken" });
    }

    // if (
    //   !password.match(
    //     "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$",
    //   )
    // ) {
    //   return res.status(400).json({
    //     message:
    //       "Password has to be 8 characters long, with 1 uppercase, 1 lowercase and 1 special character",
    //   })
    // }

    const salts = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salts);

    const createdUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: "User created succesfully" }, createdUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!(email || username) || !password) {
      return res.status(400).json({ errorMessage: "Please provide all info" });
    }

    const foundUser = await User.findOne({ $or: [{ email }, { username }] });
    if (!foundUser) {
      return res.status(400).json({ errorMessage: "User doesn't exist" });
    }

    // const isValid = await bcrypt.compare(password, foundUser.password)

    if (!bcrypt.compareSync(password, foundUser.password)) {
      return res.status(400).json({ errorMessage: "Incorrect password" });
    }

    const payload = {
      _id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email,
    };

    const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "6h",
      algorithm: "HS256",
    });

    return res
      .status(200)
      .json({ message: "Successfuly logged in", authToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// router.get("/verify", verify, async (req, res) => {
//   return res.status(200).json("verified")
// })

router.get("/verify", verifyExpressJWT, async (req, res) => {
  console.log(req.auth);

  return res
    .status(200)
    .json({ message: "token valid on backend", currentUser: req.auth._id });
});

router.get("/profile/:userId", async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.userId).select(
      "-password",
    );
    res.status(200).json(foundUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "failed to find user" });
  }
});
export default router;
