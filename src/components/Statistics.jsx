export default function Statistics({ good, neutral, bad, total, avg, postiviePercentage }) {
  return (
    <>
      <h2>Stats</h2>

      <table>
        <tbody>

          <tr>
            <td>Good : </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral : </td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad : </td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total : </td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>avg : </td>
            <td>{avg}</td>
          </tr>
          <tr>
            <td>Postivie Percentage : </td>
            <td>{postiviePercentage}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}