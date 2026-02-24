// first get the Schema and model from mongoose
const { Schema, model } = require("mongoose");

// define the shape of our pets
const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  petType: {
    type: String,
    enum: ["Dog", "Cat", "Reptile", "Fish", "Bird", "Other"],
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

//create the model
const PetModel = model("pet", petSchema);

//export the model to use in other files
module.exports = PetModel;
