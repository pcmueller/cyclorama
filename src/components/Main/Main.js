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

  useEffect(() => {
    populateGenreList();
  }, [cards, filtered]);


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

    const filterByGenre = () => {
    const matches = [];

    if (selection) {
      cards.forEach(card => {
        if (card.props.genres.includes(selection)) {
          matches.push(card);
        }
      });
      if (!matches.length) {
        setError('Sorry, no results found.');
      }
    }
    setSelectResults(matches);
  }


  const clearSelection = () => {
    setSelection('');
    setSelectResults([]);
    setError('');
    filterResults();
  }

  return (
    <>
      <Header
        genres={genres}
        selection={selection}
        setSelection={setSelection}
        clearSelection={clearSelection}
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
