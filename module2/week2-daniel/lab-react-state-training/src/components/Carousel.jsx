import { useState } from "react"

function Carousel({ imgArray }) {
  const [image, setImage] = useState(imgArray[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  const right = () => {
    currentIndex >= 3 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)

    setImage(imgArray[currentIndex])
  }

  const left = () => {
    currentIndex <= 0 ? setCurrentIndex(3) : setCurrentIndex(currentIndex - 1)
    setImage(imgArray[currentIndex])
  }

  return (
    <div>
      <button onClick={left}>left</button>
      <img src={image} alt="" /> <button onClick={right}>right</button>
    </div>
  )
}

export default Carousel
