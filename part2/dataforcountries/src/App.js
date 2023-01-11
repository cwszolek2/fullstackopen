import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState("")
  const [showCountryNames, setShowCountryNames] = useState([])
  const [weather, setWeather] = useState({})


  
  const countryHook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }

  useEffect(countryHook, []);

  const weatherHook = () => {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    const temp = 0;
    const showCountriesData = countries.filter(country => showCountryNames.includes(country.name.common))
    for(let i = 0; i < showCountriesData.length; i++) {
      const country = showCountriesData[i];
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`)
        .then(response => {
          console.log("Response: ", response)
          let weatherEntry = {[country.name.common]:response}
          setWeather(weather => ({
            ...weather,
            ...weatherEntry
          }))
        })
        console.log(weather)
    } 
  }

  useEffect(weatherHook, [countries, showCountryNames])
  
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }

  const showCountryDetailsClick = (event, country) => {
    console.log(showCountryNames)
    if(!(showCountryNames === undefined) && (showCountryNames.includes(country))) {
      setShowCountryNames(showCountryNames.filter(countryName => 
        countryName != country
      ))
    } else {
      setShowCountryNames(showCountryNames.concat(country))
    }
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
        <CountryList countriesToShow={countriesToShow} showCountryNames={showCountryNames} showCountryDetailsClick={showCountryDetailsClick} weather={weather}/> 
      </div>
  )
}

export default App;
