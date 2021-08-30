import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Library from '../Library/Library';

const Main = ({ movies, error, setError }) => {

  const [ cards, setCards ] = useState([]);
  const [ query, setQuery] = useState([]);
  const [ searchResults, setSearchResults ] = useState([]);
  const [ selection, setSelection ] = useState('');
  const [ selectResults, setSelectResults ] = useState([]);
  const [ filtered, setFiltered ] = useState([]);
  const [ genres, setGenres ] = useState([]);

  const clearSearch = () => {
    setQuery('');
    setSearchResults([]);
    setError('');
    filterResults();
  }

  const filterResults = () => {
    setFiltered(searchResults);
  }


  const populateGenreList = () => {
    const genreList= [];

    let available;
    
    if (searchResults.length) {
      available = searchResults;
    } else {
      available = cards;
    }
    
    available.forEach(card => {
      card.props.genres.forEach(genre => {
        if (!genreList.includes(genre)) {
          genreList.push(genre);
        }
      })
    });
    
    setGenres(genreList.sort());
  }

  return (
    <>
      <Header
        setQuery={setQuery}
        clearSearch={clearSearch}
      />
      <Library
        movies={movies}
        cards={cards}
        setCards={setCards}
        filtered={filtered}
        error={error}
      />
    </>
  )
}

export default Main;
