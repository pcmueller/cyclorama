import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Dropdown from '../Dropdown/Dropdown';

const NavBar = ({ setQuery, clearSearch, genres, setSelection, clearSelection }) => {

  return (
    <nav className='nav-bar'>
      <SearchBar
        setQuery={setQuery}
        clearSearch={clearSearch}
      />
      <Dropdown
        genres={genres}
        setSelection={setSelection}
        clearSelection={clearSelection}
      />
    </nav>
  )
}

export default NavBar;