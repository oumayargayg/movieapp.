import { Rate } from 'antd';
import React from 'react';
import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByName from './Components/FilterByName/FilterByName';
import MovieList from './Components/MovieList/MovieList';
import FilterByRate from './Components/Rate/Rating'
import { moviesData } from './Constant/Data';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [inputSearch, setInputSearch] = useState("")
  const [rating, setRating] = useState(1)

  const add = (newMovie) => {
    setMovies([...movies, newMovie]) 
  }



  return (
    <div className="App">
      <h1> Movie App Workshop </h1>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <FilterByRate rating={rating} setRating={setRating} />
      <MovieList movies={movies} inputSearch={inputSearch} /> 
      <AddMovie add={add} />
    </div>
  );
}

export default App;
