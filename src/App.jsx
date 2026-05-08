import { useState } from "react"

export default function App() {
  const [value, setValue] = useState(10)

  const resetToZero = () => {
    const handler = () => {
      console.log('reseting to zero')
      setValue(0)
    }
    return handler;
  }

  return (
    <div>
      {value} 
      <button onClick={resetToZero()}>reset to zero</button>
    </div>
  )
}