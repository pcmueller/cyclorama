import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Header = ({ setQuery, clearSearch, genres, setSelection, clearSelection }) => {

  return (
    <header className='app-header'>
      <NavLink exact to='/' className='home-link'>
        <div className='logo-container buzz'>
          <img src='popcorn-mascot.png' alt='mascot-logo' className='logo' />
        </div>
        <h1 className='app-title glow-effect'>
          CYCLORAMA
        </h1>
        <></>
      </NavLink>
      <NavBar
        setQuery={setQuery}
        clearSearch={clearSearch}
        genres={genres}
        setSelection={setSelection}
        clearSelection={clearSelection}
      />
    </header>
  )
}

export default Header;