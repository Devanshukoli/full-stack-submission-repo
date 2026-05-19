import { useState, useEffect } from 'react'
import Filter from '../components/Filter'
import Performanceform from '../components/Personform'
import Persons from '../components/Person'
import personService from './services/persons'
import Notification from '../components/Notification'
import './index.css'
import Footer from '../components/Footer'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setNewSearchTerm] = useState('');
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService.getAllPersons()
      .then(initialData => {
        setPersons(initialData)
      })
  }, [])

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



    personService.createPersons(personObject)
      .then(res => {
        setPersons(persons.concat(res))

        setNotification({
          message: `Added ${res.name}`,
          type: 'success'
        })

        setTimeout(() => {
          setNotification(null)
        }, 3000)
      })
      .catch((error) => {
        setNotification({
          message: `Failed to add person...`,
          type: 'error'
        })

        setTimeout(() => {
          setNotification(null)
        }, 2000)
      })

    setNewName('')
    setNewNumber('')

  }

  const deletePersonNum = (id) => {

    let isConfirmed = confirm('do you want to delete this?')

    if (isConfirmed === true) {

      personService.deletePerson(id)
        .then(() => {
          setPersons(
            persons.filter(person => person.id !== id)
          )

          setNotification({
            message: `Person deleted successfully.`,
            type: 'success'
          })

          setTimeout(() => {
            setNotification(null)
          }, 3000)
        })
    }
    return;
  }


  return (
    <div>
      <h1>Phonebook</h1>

      <Notification notification={notification} />

      <Filter handleSearch={handleSearch} searchTerm={searchTerm} persons={persons} />

      <Performanceform
        addNumber={addNumber}
        handleNameChange={handleNameChange}
        newName={newName}
        handlePhoneNumberChange={handlePhoneNumberChange}
        newNumber={newNumber}
      />

      <Persons persons={persons} deletePersonNum={deletePersonNum} />

      <Footer />
    </div>
  )
}

export default App