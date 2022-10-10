import React from 'react'
import Person from './Person'

const PersonsList = ({ personsToShow }) => {
    return(
        <div>
            <ul>
                {personsToShow.map(person => 
                    <Person key={person.name} person={person} />  
                )}
        </ul>
        </div>
    )
}

export default PersonsList