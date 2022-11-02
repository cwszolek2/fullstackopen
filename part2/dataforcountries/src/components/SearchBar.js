import React from 'react'

const SearchBar = ({ searchText, handleSearchTextChange }) => {
    return (
        <div>
            find countries  <input
                                value={searchText}
                                onChange={handleSearchTextChange}
                            />
        </div>
    )
}

export default SearchBar;