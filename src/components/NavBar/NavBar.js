import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Dropdown from '../Dropdown/Dropdown';

const NavBar = () => {

  return (
    <nav className='nav-bar'>
      <SearchBar></SearchBar>
      <Dropdown></Dropdown>
    </nav>
  )
}

export default NavBar;