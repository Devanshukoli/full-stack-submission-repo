const Persons = (props) => {
  return (
    <>
      <h2>Numbers</h2>
      {props.persons.map((person) => (
        <>
          <li key={person.id}>{person.name} {person.number}</li>
          <button onClick={() => props.deletePersonNum(person.id)}>delete</button>
        </>
      ))}
    </>
  )
}

export default Persons;