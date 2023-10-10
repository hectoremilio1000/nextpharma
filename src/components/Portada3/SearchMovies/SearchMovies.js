import React from 'react'

function SearchMovies({handleOnChange}) {
  return (
      <input
          type="text"
          onChange={handleOnChange}
          placeholder='search movie'
/>
  )
}

export default SearchMovies