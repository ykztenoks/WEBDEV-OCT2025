import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "lime",
        height: "5vh",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/list">HP Books</Link>
      <Link to="/random-dog">Random dog</Link>
    </nav>
  )
}

export default Navbar
