import React, { useState, useEffect, useCallback } from 'react';
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

  const populateGenreList = useCallback(() => {
    
    const matchAvailGenres = (available) => {
      return available.reduce((arr, card) => {
        card.props.genres.forEach(genre => {
          if (!arr.includes(genre)) {
            arr.push(genre);
          }
        })
        return arr.sort();
      }, []);
    }

    searchResults.length ? 
      setGenres(matchAvailGenres(searchResults)) : 
      setGenres(matchAvailGenres(cards));

  }, [cards, searchResults]);

  useEffect(() => {
    populateGenreList();
  }, [cards, filtered, searchResults, populateGenreList]);

  const filterByGenre = useCallback(() => {
    const matches = [];
  
    if (selection.length) {
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
  }, [cards, selection, setError]);

  useEffect(() => {
    filterByGenre();
  }, [selection, filterByGenre]);

  const searchMovies = useCallback(() => {
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
  }, [cards, query, setError]);

  useEffect(() => {
    searchMovies();
  }, [query, searchMovies]);

  const filterResults = useCallback(() => {
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
  }, [cards, error.length, searchResults, selectResults]);

  useEffect(() => {
    filterResults();
  }, [searchResults, selectResults, filterResults]);

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
