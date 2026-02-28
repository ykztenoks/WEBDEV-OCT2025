const UserModel = require("../models/User.model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
router.post("/create-a-user", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
