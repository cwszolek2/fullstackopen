import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonsList from './components/PersonsList'
import PersonForm from './components/PersonForm'
import Search from './components/Search'

const App = (props) => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    }

    const currentNames = persons.map(person => person.name);

    if(currentNames.includes(newName)) {
      window.alert("${newName} already exists in the phonebook")
    } else {  
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }

  }

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const personsToShow = searchText === "" 
    ? persons  
    : persons.filter(person => {
        return person.name.includes(searchText);
      })

  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchText={searchText}
              handleSearchTextChange={handleSearchTextChange}
      />
      <h3>Add a new</h3>
      <PersonForm  addName={addName}
                    newName={newName}
                    handleNameChange={handleNameChange}
                    newNumber={newNumber}
                    handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PersonsList personsToShow={personsToShow}/>
    </div>
  )
}

export default App