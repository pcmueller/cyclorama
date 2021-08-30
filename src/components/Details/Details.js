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
  <>
      {error && 
        <div className='message-box'>
          <h2 className='message'>{error}</h2>
        </div>
      }
      {!error && !movie && 
        <div className='message-box'>
          <h2 className='message'>Page Loading 🍿</h2>
        </div>
      } 
      {movie && 
        <section className='movie-info-container' style={{ backgroundImage: `url(movieHeroImages/${movie.id}.jpeg)`}}>
          <article className='movie-info'>
            <div className='movie-info-left'>
              <div className='poster'>
                <img 
                  id={movie.id}
                  alt={`${movie.title} poster`}
                  src={`moviePosterImages/${movie.id}.jpeg`}
                  onError={(e)=>{e.target.src="moviePosterImages/defaultImage.jpeg"}}
                />
                {movie.moods.length > 0 && <p className='moods'>{movie.moods}</p>}
              </div>
            </div>
            <div className='movie-info-right'>
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
          </article>
          <nav className='home-btn-container'>
            <NavLink exact to='/' >
              <button className='home-btn grow'>
                <i className='fas fa-home'></i>
                Return Home
              </button>
            </NavLink>
          </nav>
        </section>
      }
    </>
  )
}

export default Details;