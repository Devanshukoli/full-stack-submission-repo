export default function Statistics ({ good, neutral, bad, total, avg, postiviePercentage }) {
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