import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    return setCounter(counter + 1)
  }

  const resetCount = () => {
    return setCounter(0)
  }

  const decrementCount = () => {
    return setCounter(counter - 1)
  }

  return (
    <>
      <div>
        {counter}
      </div>
      {/* setting the counter inside onclick */}
      <button onClick={increaseCount}>Plus</button>

      {/* adding the reset button */}
      <button onClick={resetCount}>Reset</button>

      {/** adding decrement counter */}
      <button onClick={decrementCount}>Minus</button>
    </>
  )
}

export default App;