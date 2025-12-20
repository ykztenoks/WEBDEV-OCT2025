import maxence from "../assets/images/maxence.png"
import glasses from "../assets/images/maxence-glasses.png"
import { useState } from "react"

function ClickablePicture() {
  const [toggle, setToggle] = useState(maxence)

  const changePic = () => {
    setToggle(toggle.includes("glasses") ? maxence : glasses)
  }
  return (
    <div>
      <img src={toggle} alt="maxence" onClick={changePic} />
    </div>
  )
}

export default ClickablePicture
