import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => handleGood()}>Good</button>
      <button onClick={() => handleNeutral()}>neutral</button>
      <button onClick={() => handleBad()}>bad</button>

      <h2>Stats</h2>
      <span>Good : {good}</span>
      <br></br>
      <span>neutral : {neutral}</span>
      <br></br>
      <span>bad : {bad}</span>
    </div>
  )
}

export default App