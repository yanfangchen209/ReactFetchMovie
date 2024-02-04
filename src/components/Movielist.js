import React from 'react';
import Movie from './Movie';


function Movielist (props){
  return (
    <div>
        {props.movies.map((movie, index) => (<Movie key={index} movie={movie} />))}

    </div>
  )
}

export default Movielist;
