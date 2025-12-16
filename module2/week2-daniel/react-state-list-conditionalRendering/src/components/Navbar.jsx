function Navbar({ setTheme, theme }) {
  return (
    <div className="navbar">
      <li>Home</li>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle theme
      </button>
    </div>
  )
}

export default Navbar
