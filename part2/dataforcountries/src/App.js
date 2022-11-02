import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState("")
  const [showCountryNames, setShowCountryNames] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })

  }

  useEffect(hook, []);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }

  const showCountryDetailsClick = (event, country) => {
    console.log(showCountryNames)
    if(!(showCountryNames === undefined) && (showCountryNames.includes(country))) {
      console.log("includes")
      setShowCountryNames(showCountryNames.filter(countryName => {
        return countryName != country
      }))
    } else {
      setShowCountryNames(showCountryNames.concat(country))
    }
    /*let eventCountry = event.value;
    if(showCountries.includes(eventCountry.name.common)) {
      setShowCountries(showCountries.filter(country => {
        return country.name.common.includes(eventCountry.name.common)
      }))
    } else {
      setShowCountries(showCountries.concat(eventCountry.value))
    }*/
  }

  const countriesToShow = () => {
    if(searchText === ''){
      return []
    } else {
      const results = countries.filter( country => {
        return country.name.common.includes(searchText);
      })
      return results;
    }
  }
  


  return (
      <div>
        <SearchBar  searchText={searchText}
                    handleSearchTextChange={handleSearchTextChange}/>
        <CountryList countriesToShow={countriesToShow} showCountryNames={showCountryNames} showCountryDetailsClick={showCountryDetailsClick}/> 
      </div>
  )
}

export default App;
