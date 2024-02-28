import React from 'react'

const Search = ({ search, handleChange }) => {
  return (
    <input type="search" name="search" id="search" value={search} onChange={(e) => handleChange(e.target.value)}/>
  )
}

export default Search