import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';

const Library = ({ movies, cards, setCards, filtered, error }) => {

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
      <div className='message-box'>
        {error && <h2 className='message'>{error}</h2>}
        {!error && !cards && <h2 className='message'>Page Loading 🍿</h2>}
        {!error && cards.length > 0 && <h2 className='message'></h2>}
      </div>
      <section className='library'>
        <div className='movie-cards'>
          {filtered.length > 0 && filtered}
          {filtered.length === 0 && !error && cards}
        </div>
      </section>
    </main>
  )
}

export default Library;
