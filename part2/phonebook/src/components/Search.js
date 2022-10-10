import Reach from 'react'

const Search = ({ searchText, handleSearchTextChange }) => {
    return (
        <div>
            filter shown with <input  
                                    value={searchText}
                                    onChange={handleSearchTextChange}
                                />
        </div>
    )
}

export default Search