import { useState } from "react"

export default function App() {
  const [value, setValue] = useState(10)

  const resetToZero = () => {
    setValue(0)
  }

  return (
    <div>
      {value} 
      <button onClick={() => resetToZero()}>reset to zero</button>
    </div>
  )
}