import react from 'react'

const Country = ({ country }) => {
    return (
        <li>
            {country.name.common}
        </li>

    )
}

export default Country;