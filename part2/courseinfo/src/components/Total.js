import React from 'react'

const Total = ({ exercises }) => {
    const total = exercises.reduce((prev, curr) => prev + curr)
    return (
        <div>total of {total} exercises</div>
    )
}

export default Total