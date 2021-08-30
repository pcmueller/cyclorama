import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Library from '../Library/Library';

const Main = ({ movies, error, setError }) => {

  const [ cards, setCards ] = useState([]);
  const [ query, setQuery] = useState([]);
  const [ searchResults, setSearchResults ] = useState([]);
  const [ filtered, setFiltered ] = useState([]);

  const clearSearch = () => {
    setQuery('');
    setSearchResults([]);
    setError('');
    filterResults();
  }

  const filterResults = () => {
    setFiltered(searchResults);
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
