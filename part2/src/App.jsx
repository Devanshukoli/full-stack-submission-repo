import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => {
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : ''

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital?.[0]}</p>
      <p>area {country.area}</p>

      <h3>languages</h3>
      <p>{languages}</p>

      <img src={country.flags.png} alt={country.flags.alt || `Flag of ${country.name.common}`} width="160" />
    </div>
  )
}

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = value
    ? countries.filter(country =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    )
    : []

  const handleChange = (event) => {
    setValue(event.target.value)
    setSelectedCountry(null)
  }

  const showCountry = (country) => {
    setSelectedCountry(country)
    setValue(country.name.common)
  }

  return (
    <div>
      <div>
        find countries <input value={value} onChange={handleChange} />
      </div>

      {selectedCountry ? (
        <CountryDetails country={selectedCountry} />
      ) : filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : (
        filteredCountries.map(country => (
          <div key={country.cca3}>
            {country.name.common}
            <button onClick={() => showCountry(country)}>show</button>
          </div>
        ))
      )}
    </div>
  )
}

export default App
