//On 2.16
import './index.css'
import { useState, useEffect } from 'react'
import Notification from './components/Notification'
import personService from './services/Persons'
import PersonsList from './components/PersonsList'
import PersonForm from './components/PersonForm'
import Search from './components/Search'

const App = (props) => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')
  const [notificationName, setNotificationName] = useState(null)
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    personService
     .getAllPersons()
     .then(initialPersons => {
       setPersons(initialPersons)
     })
     .catch(error => {
      alert(
        `Failure in getAll() method`
      )
     }) 
   }, [])

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    const currentNames = persons.map(person => person.name);
    /*
    const searchedPerson = persons.filter((person) => person.name === newName)
    //need to search through the filter to see if any values do not contain the newNumber
    if true then we prompt to the first elseif below.  
    // Don't use Find because it modifies the array. 

    if(searchedPerson === undefined) {
      personService
      .createPerson(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')  
      })
      .catch(error => {
        alert(
          `the person '${personObject.name}' could not be added to the database`
        )
      })
    } else if(searchedPerson.number === newNumber) {
      if(window.alert("${newName} is already added to the phonebook, replace the old number with a new one?")) {
        personObject.id = searchedPerson.id
        personService
          .editPerson(personObject)
          .then(returnedPerson => {
            setPersons()
          })
      }

    }
    */
    if(currentNames.includes(newName)) {
      if(window.confirm(`${newName} is already added to the phonebook, would you like to replace the phone number?`)) {
        personObject.id = persons.find(p=> p.name === newName).id
        console.log(`ID retrieved: ${personObject.id}`)
        if(personObject.id !== undefined) {
          personService
            .editPerson(personObject)
            .then(returnPerson => {
              //lol idk how to filter this
              //setPersons(persons.filter(p => (p.name !== personObject.name && p.number === personObject.number)))
              setPersons(
                persons.map((person) => 
                  person.id !== personObject.id ? person : personObject
                )
              )
              //setPersons(persons.concat(returnPerson))
              setNewName('')
              setNewNumber('')
            })
            .catch(error => {
              alert(
                `the person '${personObject.name}' could not have their number edited`
              )
              setNotificationName(personObject.name, error)
              setMessageType('error')
              setTimeout(() => {
                setNotificationName(null)
              }, 5000)
              setPersons(persons.filter(p => (p.name !== personObject.name)));
              setNotificationName('', null)
            })
        }
      }

    } else {  
      personService
        .createPerson(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson)) 
          setNotificationName(returnedPerson.name)
          setMessageType('user-added')
          setTimeout(() => {
            setNotificationName(null)
          }, 5000) 
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          alert(
            `the person '${personObject.name}' could not be added to the database`
          )
        })
    }
  }

  const deletePersonClick = (event, person) => {
    console.log(person)
    if(window.confirm(`Do you really want to delete '${person.name}'?`)){
      if (person !== undefined) {
        const personId = persons.find(p => p.name === person.name).id 
        console.log(personId)
        if(personId !== undefined) {
          personService
            .deletePerson(personId)
            .then(() => {
              setPersons(persons.filter(p => p.name !== person.name))
            })
            .catch(error => {
              alert (
                `the person '${person.name}' was not found in the server`
              )
            })
        } else {
          alert( 'ERROR person not found in persons' )
        }
      }
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
      <Notification message={notificationName} type={messageType}/>
      <h3>Add a new</h3>
      <PersonForm  addName={addName}
                    newName={newName}
                    handleNameChange={handleNameChange}
                    newNumber={newNumber}
                    handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PersonsList personsToShow={personsToShow}
                    deletePersonClick={deletePersonClick}/>
    </div>
  )
}

export default App