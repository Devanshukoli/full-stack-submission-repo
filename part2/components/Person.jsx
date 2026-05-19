const Persons = (props) => {
  return (
    <>
      <h2>Numbers</h2>
      {props.persons.map((person) => (
        <>
          <p key={person.id}>{person.name} {person.number}</p>
          <button onClick={() => props.deletePersonNum(person.id)}>delete</button>
        </>
      ))}
    </>
  )
}

export default Persons;