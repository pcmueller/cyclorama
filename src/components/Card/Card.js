import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, title }) {

  return (
    <Link to={`/${id}`} className='link-container' title={title}>
      <article className='movie-card grow'>
        <img 
          id={id} 
          alt={`${title} poster`}
          src={`moviePosterImages/${id}.jpeg`}
          onError={(e)=>{e.target.src="moviePosterImages/defaultImage.jpeg"}}
        />
      </article>
    </Link>
  )
}

export default Card;