import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addNumber = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }
    console.log(personObject.name)
    console.log(personObject.number)
  
    const existingPerson = persons.find(
      (x) => x.name === personObject.name
    )

    if (existingPerson) {

      alert(`${personObject.name} already exists.`)

      setNewName('')

      return
    }

    setPersons(persons.concat(personObject))

    setNewName('')

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          phone-number: <input onChange={handlePhoneNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* todo: add number as well. */}
      {persons.map((person) => (
        <p key={person.id}>{person.name} { person.number}</p>
      ))}
    </div>
  )
}

export default App