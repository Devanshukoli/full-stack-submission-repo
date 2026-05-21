import { useState, useEffect } from 'react'
import axios from 'axios'


const DisplayCountryDetails = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      {props.languages.map(x => {
        <li>{x}</li>
      })}
      <img src={props.flags.svg} alt={props.flags.alt} />
      <span>{ props.postalCode}</span>
      <span>{ props.currencies.name}</span>
    </>
  )
}

const App = () => {
  const [value, setValue] = useState('')
  const [country, setCountry] = useState(null)


  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        console.log(response.data)
        // todo: where should I store this data, because I would like to use this existing data to show the feature working.
      })
  }, [])

  useEffect(() => {
    if (country) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then(response => {
          console.log(response.data)
          setCountry(response.data)
        })
    }
  }, [country])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountry(value)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        Country: <input value={value} onChange={handleChange} />
        <button type="submit">Show the info</button>
      </form>
      <pre>
        {JSON.stringify(country)}
      </pre>
    </div>
  )
}

export default App