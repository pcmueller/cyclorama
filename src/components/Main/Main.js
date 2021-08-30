import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Library from '../Library/Library';

const Main = ({ movies, error, setError }) => {

  const [ cards, setCards ] = useState([]);
  const [ filtered, setFiltered ] = useState([]);

  return (
    <>
      <Header></Header>
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
