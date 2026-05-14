const Persons = (props) => {
  return (
    <>
      <h2>Numbers</h2>
      {props.persons.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </>
  )
}

export default Persons;