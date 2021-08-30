import React, { useState, useEffect } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { fetchAllMovies } from '../../utilities/apiCalls';
import Main from '../Main/Main';
import Details from '../Details/Details';

const App = () => {

  const [ movies, setMovies ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    getAllMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllMovies = () => {
    fetchAllMovies()
      .then(response => {
        if (response.data) {
          cleanMovieData(response.data);
        }
      })
      .catch(error => {
        setError('Sorry, we\'re unable to load the page at the moment.');
        console.log(error);
    })
  }


  const cleanMovieData = (data) => {
    const movieArr = data.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        genres: movie.genres
      }
    })
    console.log(movieArr);
    setMovies(movieArr);
  }

  return (
    <Router>
      <Route>
        <Main
          movies={movies}
          error={error}
          setError={setError}
        />
      </Route>
      {/* <Route>
        <Details></Details>
      </Route> */}
    </Router>
  )
}

export default App;
