import React, { useState, useEffect } from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from './Search';
import PopularMovieList from './Popular';
import { Navbar } from './Navbar';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0d1f20c154ad8e9a28623f934878d3cf&query=${searchValue}`);
    const data = await response.json(); 
    if(data.results){
        setMovies(data.results);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);


  
  return (
    <div className='container-fluid'>
      <div>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>

      <div className='row '>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div> 
    </div>
  );
};

export default MovieList;
