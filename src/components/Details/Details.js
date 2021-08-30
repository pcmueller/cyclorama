import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchMovieDetails } from '../../utilities/apiCalls';

const Details = ({ id, error, setError }) => {

  const [ movie, setMovie ] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id)
      .then(response => 
        setMovie(response.data)
      )
      .catch(error => {
        console.log(error)
        setError('Uh Oh, Something Went Wrong 🎭')
      })
  }, [id, setError]);

  return (
    <div className='movie-info'>
      <div className='movie-info-box'>
        <h1 className='title'>{movie.title}</h1>
        <div className='genre-box'>
          <p className='genres'>{movie.genres}</p>
        </div>
        <p className='description'>{movie.description}</p>
        <p className='release-date'> 
          Released: {movie.releaseDate}
        </p>
        <p className='runtime'>
          Runtime: {movie.duration}
        </p>
      </div>
    </div>
  )
}

export default Details;