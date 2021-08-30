import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';

const Library = ({ movies, cards, setCards }) => {

  useEffect(() => {
    if (movies.length > 0) {
      populateLibrary();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);

  const populateLibrary = () => {
    const newCards = movies.map(movie => {
      return (
        <Card
          key={movie?.id}
          id={movie?.id}
          title={movie?.title}
          genres={movie?.genres}
        />
      )
    });

    if (newCards.length === movies.length) {
      setCards(newCards);
    }
  }

  return (
    <main className='main-page'>
      {cards}
    </main>
  )
}

export default Library;
