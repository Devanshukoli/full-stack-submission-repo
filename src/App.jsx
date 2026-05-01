import { useState } from "react";

const Display = (props) => {
  return (
    <>
      {props.counter}
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

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
      <Display counter={counter} />
      <Button onClick={increaseCount} text='Plus' />
      <Button onClick={resetCount} text='Reset' />
      <Button onClick={decrementCount} text='Minus' />
    </>
  )
}

export default App;