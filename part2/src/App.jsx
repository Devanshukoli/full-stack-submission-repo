import { useState, useEffect } from 'react'
import axios from 'axios'


const DisplayCountryDetails = ({ country }) => {
  console.log('country.......', country)
  return (
    <>
      <h1>{country.name.common}</h1>
      {country.languages.map(x => {
        <li>{x}</li>
      })}
      <img src={country.flags.svg} alt={country.flags.alt} />
      <span>{country.postalCode}</span>
      <span>{country.currencies.name}</span>
    </>
  )
}

const App = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null)


  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])


  const filteredCountry = value ? countries.filter((country) =>
    country.name.common.toLowerCase()
      .includes(value.toLowerCase())) : null;

 

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountries(value)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        Country: <input value={value} onChange={handleChange} />
        <button type="submit">Show the info</button>
      </form>
      <pre>
        {JSON.stringify(countries)}
      </pre>
      <DisplayCountryDetails country={filteredCountry} />
    </div>
  )
}

export default App