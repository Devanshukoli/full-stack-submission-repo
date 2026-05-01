import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        {counter}
      </div>
      {/* setting the counter inside onclick */}
      <button onClick={() => setCounter(counter + 1)}>Plus</button>

      {/* adding the reset button */}
      <button onClick={() => setCounter(0)}>Reset</button>

      {/** adding decrement counter */}
      <button onClick={() => setCounter(counter - 1)}>Minus</button>
    </>
  )
}

export default App;