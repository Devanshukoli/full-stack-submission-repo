import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  return (
    <>
      <div>
        {counter}
      </div>
      <button onClick={() => console.log('clicked')} onMouseEnter={() => console.log('mouse hovered.')}>Plus</button>
    </>
  )
}

export default App;