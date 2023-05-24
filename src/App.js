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
  const r = [...new Set(movie.map((Val) => Val.rating))];
  const filtermovie = (rate) => {
    const newItem = movie.filter((newVal) => {
      return newVal.rating === rate; 
        	// comparing category for displaying data
    });
    setMovie(newItem);
  };
  const nm= [...new Set(movie.map((Val) => Val.rating))];
  const filtername = (n) => {
    const newItem = movie.filter((newVal) => {
      return newVal.name === n; 
        	// comparing category for displaying data
    });
    setMovie(newItem);
  };




  return (
  
    <div>
    <MovieList movie={movie} setMovie={setMovie} />
    <AddMovie add={add}/>
    {r.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filtermovie(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setMovie(moviesData)}
        >
          All
        </button> 
        

       
    </div>
  );
}

export default App;
