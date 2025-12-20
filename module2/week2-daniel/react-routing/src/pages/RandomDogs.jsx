import { useState } from "react"

function RandomDogs() {
  const [dogs, setDogs] = useState(null)

  const fetchDogs = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const dogs = await response.json()
    console.log(dogs)
    setDogs(dogs.message)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={fetchDogs}>I wanna see a random dog!</button>
      <img src={dogs} alt="Dogs" />
    </div>
  )
}

export default RandomDogs
