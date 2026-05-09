import { useState } from 'react'

const Statistics = ({ good, neutral, bad, total, avg, postiviePercentage }) => {
  return (
    <>
      <h2>Stats</h2>
      <span>Good : {good}</span>
      <br></br>
      <span>neutral : {neutral}</span>
      <br></br>
      <span>bad : {bad}</span>
      <br></br>
      <span>All counts: {total}</span>
      <br></br>
      <span>Average : {avg}</span>
      <br></br>
      <span>Postive count percentage: {postiviePercentage}</span>
    </>
  )
}

const NoFeedBack = () => {
  return (
    <>
      <h3>No Feedback Given</h3>
    </>
  )
}

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

  const total = good + neutral + bad;
  const avg = (total) / 3;
  const postiviePercentage = ((good / total) * 100) > 0 ? (good / total) * 100 : 0;


  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => handleGood()}>Good</button>
      <button onClick={() => handleNeutral()}>neutral</button>
      <button onClick={() => handleBad()}>bad</button>

      {(good || neutral || bad) === 0 ? <NoFeedBack /> : <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avg={avg}
        postiviePercentage={postiviePercentage}
      />}
    </div>
  )
}

export default App