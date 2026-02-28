//import the Schema and model from Mongoose
const { Schema, model } = require("mongoose");

//create the schema
const pizzaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  size: {
    type: String,
    required: true,
  },

  toppings: {
    type: [String],
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  creater: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
//create the model
const PizzaModel = model("Pizza", pizzaSchema);

//export the model
module.exports = PizzaModel;
