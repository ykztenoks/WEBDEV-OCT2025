const router = require("express").Router();
const uploader = require("../middlewares/cloudinary.config.js");
const UserModel = require("../models/User.model.js");
router.post("/signup", uploader.single("imageUrl"), async (req, res) => {
  try {
    if (!req.file) {
      const createdUser = await UserModel.create(req.body);
      console.log("User in DB with Profile image", createdUser);
      res.status(201).json(createdUser);
    } else {
      const newUser = { ...req.body, profilePicture: req.file.path };
      const createdUser = await UserModel.create(newUser);
      console.log("User in DB with Profile image", createdUser);
      res.status(201).json(createdUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
