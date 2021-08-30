import React, { useEffect, useState } from 'react';

const Dropdown = ({ genres, setSelection, clearSelection }) => {

  const [ options, setOptions ] = useState([]);

  useEffect(() => {
    if (genres?.length) {
      populateOptions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genres]);

  const populateOptions = () => {
    const listElems = genres.map(genre => {
      return (
        <option key={genre.toLowerCase()} value={genre}>{genre}</option>
      )
    })
    setOptions(listElems);
  }

  const handleSelect = (e) => {
    setSelection(e.target.value);
  }
 
  return (
    <form className='dropdown-container'>
      <div className='select'>
        <select
          id='dropdown'
          className='dropdown'
          defaultValue='0'
          onChange={handleSelect}>
            <option value='0' disabled >Select genre...</option>
            {options}
        </select>
        <span className='focus'></span>
      </div>
      <button className='clear-btn' type='reset' onClick={clearSelection}>
        Clear Genre
      </button>
    </form>
  )
}

export default Dropdown;