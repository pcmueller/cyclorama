import React, { useState, useEffect } from 'react';

const SearchBar = ({ setQuery, clearSearch }) => {

  const [ input, setInput ] = useState('');

  useEffect(() => {
    if (!input) {
      clearSearch();
    } else {
      setQuery(input.toLowerCase());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <form className='search-container'>
      <input
        required
        className='search-input'
        type='search'
        name='search'
        value={input}
        placeholder='Search for movie...'
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchBar;