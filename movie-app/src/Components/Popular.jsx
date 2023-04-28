import React, { useState, useEffect } from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const PopularMovieList = () => {
  const [movies, setMovies] = useState([]);


  const getMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=0d1f20c154ad8e9a28623f934878d3cf');
    const data = await response.json(); 
    setMovies(data.results);
    console.log(data.results)
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='contsinrt-fluid'>
        
       <div className='row'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    
    </div>
  );
};

export default PopularMovieList;
