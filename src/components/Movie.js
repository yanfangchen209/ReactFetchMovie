import React from 'react';


const Movie = (props) => {

  return (
    <div>
        <h2>{props.movie.title}</h2>
        <p>{props.movie.releaseDate}</p>
        <p>{props.movie.movieSummary}</p> 
    </div>
  )
}

export default Movie