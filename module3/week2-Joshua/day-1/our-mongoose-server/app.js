//this is our server
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const PetModel = require("./models/pet.model");
const UserModel = require("./models/user.model");

app.use(morgan("dev"));
app.use(express.json());
//connect to the DB first at the top
mongoose
  .connect("mongodb://127.0.0.1:27017/our-mongoose-sever")
  .then(() => {
    console.log("connected to the DB! Nice work");
  })
  .catch((err) => console.log(err));

//here are the routes
app.post("/create-a-pet", (req, res) => {
  //connect to the db and add the new pet
  console.log("made it to the create a pet route", req.body);
  PetModel.create(req.body)
    .then((createdPet) => {
      console.log("pet created in DB");
      res.status(201).json(createdPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.post("/create-a-user", async (req, res) => {
  try {
    const createdUser = await UserModel.create(req.body);
    res.status(201).json(createdUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//populating example route
app.get("/get-one-pet/:petId", async (req, res) => {
  try {
    const foundPet = await PetModel.findById(req.params.petId).populate(
      "owner",
      "_id, username email",
    );
    res.status(200).json(foundPet);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});
//start and listen with the server
app.listen(5005, () => {
  console.log("server running on port 5005");
});
