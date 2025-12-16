import "./App.css"
import { useState } from "react"
import Counter from "./components/Counter"
import Navbar from "./components/Navbar"
import CarList from "./components/CarList"
import { Toaster } from "react-hot-toast"
function App() {
  const [theme, setTheme] = useState("light")

  return (
    <div className={`${theme} content`}>
      <Toaster />
      <Navbar setTheme={setTheme} theme={theme} />
      <h1>React: State, Lists and Conditional Rendering</h1>
      <Counter />
      <CarList />
    </div>
  )
}

export default App
