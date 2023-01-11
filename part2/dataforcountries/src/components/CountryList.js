import React from 'react'

import Country from './Country'

const CountryList = ({ countriesToShow, showCountryNames, showCountryDetailsClick, weather }) => {
    if(countriesToShow().length === 0) {
        return (
            <div>
                No matches.
            </div>
        )
    }
    else if (countriesToShow().length === 1) {
        return (
            <div>
                <Country country={countriesToShow()[0]} waether={weather}/>
            </div>
        )
    }
    else if (countriesToShow().length > 10) {
        return (
            <div>
                Too many matches - please change the filter.
            </div>
        )
    }
    else 

        return (
            <div>
                <ul>
                    {countriesToShow().map(country => {
                        if(showCountryNames.includes(country.name.common)) {
                            return(
                                
                                    <li key={country.name.common}>{country.name.common} 
                                        <button onClick={e => showCountryDetailsClick(e, country.name.common)}>Show</button>
                                        <Country country={country} />
                                    </li>
                            )
                        } else {
                            return(
                                <li key={country.name.common}>{country.name.common} 
                                    <button onClick={e => showCountryDetailsClick(e, country.name.common)}>Show</button>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
}

export default CountryList;