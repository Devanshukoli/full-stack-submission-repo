const Performanceform = (props) => {
  return (
    <>

      <form onSubmit={props.addNumber}>

        <br></br>

        <h2>Add New</h2>
        <div>
          name: <input onChange={props.handleNameChange} value={props.newName} />
        </div>
        <div>
          phone-number: <input onChange={props.handlePhoneNumberChange} value={props.newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default Performanceform;