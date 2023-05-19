import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {moviesData} from './Component/moviesData'
import MovieList from './Component/movieList';
import AddMovie from './Component/AddMovie';



function App() {
  const [movie, setMovie ] = useState (moviesData)
  console.log(movie)
  const add = (newmovie) =>{
    setMovie([...movie,newmovie])
  }
  return (
  
    <div>
    <MovieList movie={movie} setMovie={setMovie} />
    <AddMovie add={add}/>
    </div>
  );
}

export default App;
