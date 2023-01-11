import React from 'react'

const Country = ({ country, weather }) => {
    const keys = Object.keys(country.languages);
    console.log(weather)
    /*const langs = []
    for(var key in country.languages) {
        langs.push(languages[key])
    }*/
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <div>{country.flag}</div>
            <b>languages:</b>

            <ul>
                {keys.map(key => <li key={key}>{country.languages[key]}</li>)}  
            </ul>
        </div>
    )
}

export default Country