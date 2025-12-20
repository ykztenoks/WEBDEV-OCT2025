import { useState } from "react"

function DiscoButton() {
  const [likes, setLikes] = useState(0)
  const [current, setCurrent] = useState(0)
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

  const like = () => {
    setLikes(likes + 1)
    current >= 5 ? setCurrent(0) : setCurrent(current + 1)
  }

  return (
    <div>
      <button onClick={like} style={{ backgroundColor: colors[current] }}>
        {likes} Likes
      </button>
    </div>
  )
}

export default DiscoButton
