import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '../components/Filter'
import Performanceform from '../components/Personform'
import Persons from '../components/Person'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setNewSearchTerm] = useState('')

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

    if (newNote.length === 0) {
      alert("write soemthing")
      return
    }

    const noteObject = {
      // id: String(notes.length + 1),
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(createdNotes => {
        setNotes(notes.concat(createdNotes))
        setNewNote('')
      })

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
      })

    setNewName('')
    setNewNumber('')

  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
  const deletePersonNum = (id) => {

    confirm('do you want to delete this?')

    personService.deletePerson(id)
      .then(() => {
        setPersons(
          persons.filter(person => person.id !== id)
        )
      })
  }



  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(updatedNotes => {
        setNotes(notes.map(note => note.id === id ? updatedNotes : note))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type='submit'>save</button>
      </form>
      <h2>Phonebook</h2>

      <Filter handleSearch={handleSearch} searchTerm={searchTerm} persons={persons} />

      <Performanceform
        addNumber={addNumber}
        handleNameChange={handleNameChange}
        newName={newName}
        handlePhoneNumberChange={handlePhoneNumberChange}
        newNumber={newNumber}
      />

      <Persons persons={persons} deletePersonNum={deletePersonNum} />

    </div>
  )
}

export default App