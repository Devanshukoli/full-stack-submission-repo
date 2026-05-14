const Filter = (props) => {

  const filteredPerson = props.persons.filter((person) => (
    person.name.toLowerCase().includes(props.searchTerm.toLowerCase())
  ))

  return (
    <>
      <div>
        filter shown with : <input onChange={props.handleSearch} value={props.searchTerm} placeholder='ex: Arto Hellas'></input>
        {filteredPerson.map((x) => (
          <p>{x.name}</p>
        ))}
      </div>
    </>
  )
}

export default Filter;
