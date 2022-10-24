import Country from './Country'
import CountryDetailed from './CountryDetailed'

const CountryList = ({ countriesToShow }) => {
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
                <CountryDetailed country={countriesToShow()[0]}/>
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
                    {countriesToShow().map(country => 
                        <Country key={country.name.common} country={country}/>
                    )}
                </ul>
            </div>
        )
}

export default CountryList;