import React from 'react';

const Card = ({ movie }) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 mb-3 '>
      <div className='card bg-light text-light bg-dark'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className='card-img-top'
          alt={movie.title}
        />
        <div className='card-body'>
          <h5 className='card-title'>{movie.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
