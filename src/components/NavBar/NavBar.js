import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Dropdown from '../Dropdown/Dropdown';

const NavBar = ({ setQuery, clearSearch }) => {

  return (
    <nav className='nav-bar'>
      <SearchBar
        setQuery={setQuery}
        clearSearch={clearSearch}
      />
      <Dropdown
      />
    </nav>
  )
}

export default NavBar;