import React from 'react'

function MovieList({results}) {
  return (
      <div>
          {results?.map((result) => {
              return (
                  <div className='movie' key={result.title}>
                      <img src={result._source.image_url} alt="movie title" />
                      <section className='movie_info'>
                          <div className='movie_title'>{result._source.title}</div>
                          <div className='movie_desc'>{result._source.plot}</div>
                      </section>
                  </div>
              )
          })}
    </div>
  )
}

export default MovieList