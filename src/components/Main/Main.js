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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, filtered]);

  useEffect(() => {
    filterResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults, selectResults]);

  useEffect(() => {
    searchMovies();
    populateGenreList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  
  useEffect(() => {
    filterByGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection]);

  const searchMovies = () => {
    setError('');
    let matches;
    if (query) {
      matches = cards.filter(card => card.props.title.toLowerCase().includes(query));
      if (!matches.length) {
        setError('Sorry, no results found.');
      }
    } else {
      matches = [];
    }
    setSearchResults(matches);
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

  const clearSearch = () => {
    setQuery('');
    setSearchResults([]);
    setError('');
    filterResults();
  }

  const clearSelection = () => {
    setSelection('');
    setSelectResults([]);
    setError('');
    filterResults();
  }

  const filterResults = () => {
    if (error.length) {
      setFiltered([]);
    } else if (searchResults.length && !selectResults.length) {
      setFiltered(searchResults);
    } else if (!searchResults.length && selectResults.length) {
      setFiltered(selectResults);
    } else if (searchResults.length && selectResults.length) {
      const crossFiltered = []
      searchResults.forEach(searchElem => {
        if (selectResults.includes(searchElem)) {
          crossFiltered.push(searchElem);
        }
      });
      setFiltered(crossFiltered);
    } else {
      setFiltered(cards);
    }
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
