const User = require("../models/User.model");
const PizzaModel = require("../pizza.model");
const router = require("express").Router();

//route to create a new pizza
router.post("/create-a-pizza", async (req, res) => {
  try {
    const createdPizza = await PizzaModel.create(req.body);
    //the  second promise takes the id of the created pizza and adds to the user who created it
    const updatedUser = await User.findByIdAndUpdate(
      req.body.creater,
      { $push: { userPizzas: createdPizza._id } },
      { new: true },
    );
    res.status(201).json({ createdPizza, updatedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  //   PizzaModel.create(req.body)
  //     .then((createdPizza) => {
  //       console.log(createdPizza);
  //       res.status(201).json(createdPizza);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
});

//route to get all pizzas
router.get("/find-pizzas", async (req, res) => {
  try {
    const allPizzas = await PizzaModel.find();
    res.status(200).json(allPizzas);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//route to get one specific pizza
router.get("/one-pizza/:pizzaId", (req, res) => {
  const { pizzaId } = req.params;
  console.log(req.params.pizzaId);
  PizzaModel.findById(pizzaId)
    .populate("creater", "name _id")
    .then((foundPizza) => {
      if (!foundPizza) {
        return res.status(404).json({ message: "Pizza not found" });
      } else {
        res.status(200).json(foundPizza);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//route to delete one pizza
router.delete("/one-pizza/:id", (req, res) => {
  PizzaModel.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log("Deleted!");
      res.status(200).send("Pizza deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route to update one specific pizza
router.put("/one-pizza/:pizzaId", (req, res) => {
  PizzaModel.findByIdAndUpdate(req.params.pizzaId, req.body, { new: true })
    .then((updatedPizza) => {
      res.status(200).json(updatedPizza);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
