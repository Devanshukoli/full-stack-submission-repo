import { useState } from 'react'
import Filter from '../components/Filter'
import Performanceform from '../components/Personform'
import Persons from '../components/Person'

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

  setTimeout(() => {
    console.log('loop..')
    let i = 0
    while (i < 99999999999) {
      i++
    }
    console.log('end')
  }, 5000)

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



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleSearch={handleSearch} searchTerm={searchTerm} persons={persons} />

      <Performanceform
        addNumber={addNumber}
        handleNameChange={handleNameChange}
        newName={newName}
        handlePhoneNumberChange={handlePhoneNumberChange}
        newNumber={newNumber}
      />

      <Persons persons={persons} />

    </div>
  )
}

export default App