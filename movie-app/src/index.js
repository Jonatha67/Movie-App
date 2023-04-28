import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import MovieList from './Components/Movielist';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MovieList />
  </BrowserRouter>
);

