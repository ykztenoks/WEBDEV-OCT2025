import "./App.css"
import josh from "./assets/josh.png"
import Navbar from "./components/Navbar.jsx"

function App() {
  let teacher = {
    name: "Joshua",
    lastName: "George",
    age: 25,
  }

  const { name, lastName } = teacher //destructuring the teacher object

  return (
    <>
      <Navbar />
      <div className="content">
        <h1>hello world</h1>
        <h3 className="my-name">
          this is {name} {lastName}
        </h3>
        <img src={josh} alt="josh and ragnar" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          illum obcaecati deleniti fuga. Maxime vitae vel delectus molestias sit
          eius, iure molestiae odit ab, itaque facilis praesentium nesciunt
          animi minima.
        </p>
        19:30
      </div>
      <div id="about">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi est at
          quae aut. Veritatis, reiciendis obcaecati, ab blanditiis nostrum sed
          cupiditate nemo repellat omnis quidem dolorem soluta tenetur qui
          aspernatur!
        </p>
      </div>
    </>
  )
}

export default App
