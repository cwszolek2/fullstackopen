import React from 'react'

const Person = ({ person }) => {
    console.log(person)
    return (
        <>
        {person.name}
        <br /> 
        {person.number}
        </>
    )
}

export default Person