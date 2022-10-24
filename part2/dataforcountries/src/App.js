import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");


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
        <CountryList countriesToShow={countriesToShow}/> 
      </div>
  )
}

export default App;
