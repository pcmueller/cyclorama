import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = ({ setQuery, clearSearch }) => {

  return (
    <header className='app-header'>
      <h1 className='app-title'>
        MOVIE APP TITLE
      </h1>
      <NavBar
        setQuery={setQuery}
        clearSearch={clearSearch}
      />
    </header>
  )
}

export default Header;