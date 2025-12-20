import "./App.css"
import Homepage from "./pages/Homepage"
import ListPage from "./pages/ListPage"
import NotFound from "./pages/NotFound"
import RandomDogs from "./pages/RandomDogs"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import DetailsPage from "./pages/DetailsPage"
function App() {
  return (
    <div>
      <h1>React Routing</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/random-dog" element={<RandomDogs />} />
        <Route path="*" element={<NotFound />} />
        {/* dynamic route */}
        <Route path="/list/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
