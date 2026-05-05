import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
    setFullName(e.target.value + ' ' + lastName)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
    setFullName(firstName + ' ' + e.target.value)
  }

  return (
    <div>
      <h1>Welcome to store!</h1>
      <input value={firstName} onChange={handleFirstNameChange}></input>
      <input value={lastName} onChange={handleLastNameChange}></input>

      <p>So, You're fullname is <b>{ fullName}</b></p>
    </div>
  )
}

export default App;