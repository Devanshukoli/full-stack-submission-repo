import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        {counter}
      </div>
      {/* setting the counter inside onclick */}
      <button onClick={() => { setCounter(counter + 1); console.log('increment') }}>Plus</button>

      {/* adding the reset button */}
      <button onClick={() => { setCounter(0); console.log('reset') }}>Reset</button>

      {/** adding decrement counter */}
      <button onClick={() => { setCounter(counter - 1);  console.log('decrement')}}>Minus</button>
    </>
  )
}

export default App;