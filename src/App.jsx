import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    console.log('clicked')
  }

  const mouseHover = () => {
    console.log('mouse hover')
  }

  setTimeout(() => setCounter(counter + 1), 1000);

  return (
    <>
      <div>
        {counter}
      </div>
      <button onClick={handleClick} onMouseEnter={mouseHover}>Plus</button>
    </>
  )
}

export default App;