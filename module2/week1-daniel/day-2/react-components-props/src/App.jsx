import "./App.css"
import Navbar from "./components/Navbar"
import CoffeeList from "./components/CoffeeList"
function App() {
  const coffees = [
    {
      title: "Espresso",
      temperature: 90,
      recipe: ["finely ground coffee", "hot water"],
    },
    {
      title: "Cappuccino",
      temperature: 65,
      recipe: ["espresso", "steamed milk", "milk foam"],
    },
    {
      title: "Americano",
      temperature: 85,
      recipe: ["espresso", "hot water"],
    },
    {
      title: "Latte",
      temperature: 70,
      recipe: ["espresso", "steamed milk", "light milk foam"],
    },
    {
      title: "Cold Brew",
      temperature: 5,
      recipe: ["coarsely ground coffee", "cold water", "time (12-24 hours)"],
    },
  ]

  return (
    <>
      <Navbar />
      <h1>hello world</h1>
      <hr />
      <CoffeeList coffees={coffees} />
    </>
  )
}

export default App
