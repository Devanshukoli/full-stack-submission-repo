import { useState } from "react";

const Display = ({ counter }) => {
  return (
    <>
      {counter}
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value: ', counter)

  const increaseCount = () => {
    console.log('increasing, value before:', counter)
    return setCounter(counter + 1)
  }

  const resetCount = () => {
    console.log('reseting to zero, value before:', counter)
    return setCounter(0)
  }

  const decrementCount = () => {
    console.log('decreasing, value before:', counter)
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