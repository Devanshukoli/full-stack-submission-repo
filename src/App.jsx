import { useState } from 'react'
import  Statistics  from './components/Statistics'
import NoFeedBack from './components/NoFeedback'
import StatisticsLine from './components/StatisticsLine'

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
      <StatisticsLine text={"Good"} onClick={() => handleGood()} />
      <StatisticsLine text={"Neutral"} onClick={() => handleNeutral()} />
      <StatisticsLine text={"Bad"} onClick={() => handleBad()} />

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