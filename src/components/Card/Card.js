import React from 'react';

const Card = ({ id, title }) => {

  return (
    <article className='movie-card grow'>
      <img 
        id={id} 
        title={title}
      />
    </article>
  )
}

export default Card;

