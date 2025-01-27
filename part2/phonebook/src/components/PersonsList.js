import React from 'react'
import Person from './Person'

const PersonsList = ({ personsToShow, deletePersonClick }) => {
    return(
        <div>
            <ul>
                {personsToShow.map(person => 
                        <li>
                            <Person key={person.name} person={person}/>  
                            <button onClick={e => deletePersonClick(e, person)}>delete</button>
                        </li>
                )}
            </ul>
        </div>
    )
}

export default PersonsList