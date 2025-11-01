import React from 'react'
import Person from './Person'

const PersonsList = ({ personsToShow, deletePersonClick }) => {
    return(
        <div>
            <ul>
                {personsToShow.map(person => 
                    <li key={person.id}>
                        <Person key={person.name} person={person}/>  
                        <br />
                        <button onClick={e => deletePersonClick(e, person)}>delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PersonsList