import React from 'react';

const Card = ({ id, title }) => {

  return (
    <article className='movie-card grow'>
      <img 
        id={id} 
        alt={`${title} poster`}
        src={`moviePosterImages/${id}.jpeg`}
        onError={(e)=>{e.target.src="moviePosterImages/defaultImage.jpeg"}}
      />
    </article>
  )
}

export default Card;

