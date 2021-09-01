import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import utils from '../../utilities/utils';

const Library = ({ movies, cards, setCards, filtered, error }) => {

  const [ text, setText ] = useState('All Movies');
  
  useEffect(() => {
    const populateLibrary = () => {
      const newCards = movies.map(movie => {
        return (
          <Card
            key={movie?.id}
            id={movie?.id}
            title={movie?.title}
            genres={utils.capitalizeElements(movie?.genres)}
          />
        )
      });

      if (newCards.length === movies.length) {
        setCards(newCards);
      }
    }

    if (movies.length > 0) {
      populateLibrary();
    }
  }, [movies, setCards]);
  
  useEffect(() => {
    const determineText = () => {
      if (filtered.length > 0 && filtered.length < movies.length) {
        setText(`Results Found: ${filtered.length}`);
      } else {
        setText('Now Playing');
      }
    }
    determineText();
  }, [filtered, movies.length]);

  return (
    <main className='main-page'>
      <div className='message-box'>
        {error && <h2 className='message'>{error}</h2>}
        {!error && !cards && <h2 className='message'>Page Loading 🍿</h2>}
        {!error && cards.length > 0 && <h2 className='message'>{text}</h2>}
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