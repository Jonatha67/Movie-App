import React from 'react'
import { Search } from './Search'
import {Routes, Route, Link } from "react-router-dom";
import PopularMovieList from './Popular';
import MovieList from './Movielist';
import UpcomingMovieList from './Upcoming';

export const Navbar = ({searchValue, setSearchValue}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-light bg-dark ">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <div>
        {/*<Link to='/' className="navbar-brand">Home</Link>*/}
        <Link to='/popular' className="navbar-brand">Popular</Link>
        <Link to='/upcoming' className="navbar-brand">Upcoming</Link>
      </div>
      <div className="d-flex justify-content-center flex-grow-1 background-black">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div>
      <Link to='/upgrade' className="navbar-brand align-self-end">Upgrade</Link>
      </div>
    </div>
        <Routes>
        {/*<Route path='/' element={<MovieList/>} />  */}
          <Route path='/popular' element={<PopularMovieList />} />
          <Route path='/upcoming' element={<UpcomingMovieList />} />
        </Routes>
  </nav>
  )
}
