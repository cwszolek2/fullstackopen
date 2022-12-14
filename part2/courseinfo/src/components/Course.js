import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
    return (
        <div>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts.map(x => x['exercises'])} />  
        </div>
    )
}

export default Course