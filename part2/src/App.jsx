import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setNewSearchTerm] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setNewSearchTerm(event.target.value);
  }

  const addNumber = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

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
    setNewNumber('')

  }

  const filteredPerson = persons.filter((person) => (
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return (
    <div>
      <h2>Phonebook</h2>


      <div>
        filter shown with : <input onChange={handleSearch} value={searchTerm} placeholder='ex: Arto Hellas'></input>
        {filteredPerson.map((x) => (
          <p>{ x.name}</p>
        ))}
      </div>


      <form onSubmit={addNumber}>

        <br></br>

        <h2>Add New</h2>
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
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App