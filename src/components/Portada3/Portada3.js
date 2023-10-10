import React, { useDeferredValue, useState, useEffect } from 'react'

import MovieList from './MovieList/MovieList'
import SearchMovies from './SearchMovies/SearchMovies'

function Portada3() {
    const [searchTerm, setSearchTerm] = useState("");
    const [moviesData, setMovies] = useState([]);

    const deferredInput = useDeferredValue(searchTerm);

    useEffect(() => {
        if (deferredInput !== "") {
            fetchMovies(deferredInput).then((movies) => {
                setMovies(movies)
            });
        }
        else {
            setMovies([])
        }
    }, [deferredInput])
    
    const fetchMovies = async (input) => {
        return fetch(
        `https://6m4w1uc4d2.execute-api.us-east-1.amazonaws.com/opensearch-movies?q=${input}`
        ).then((res) => res.json()).then((movieData) => {
        return movieData.hits.hits
    })
    }
    
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

  return (
      <div>
          <h1>Movies</h1>
          <SearchMovies handleOnChange={handleOnChange} />
          <MovieList results={moviesData}/>
    </div>
  )
}

export default Portada3