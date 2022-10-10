import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '382-2873'
    },
    { name: 'John Winthrop',
      number: '338-2838'
    },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')

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
      filter shown with <input  
                          value={searchText}
                          onChange={handleSearchTextChange}
                        />
      <form onSubmit={addName}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
          <Person key={person.name} person={person} />  
        )}
      </ul>
    </div>
  )
}

export default App