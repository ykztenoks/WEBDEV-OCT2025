import { useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(1)

  return (
    <div>
      <h2>Counter: {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button
        onClick={() => {
          if (counter > 0) setCounter(counter - 1)
        }}
      >
        decrease
      </button>
    </div>
  )
}

export default Counter
