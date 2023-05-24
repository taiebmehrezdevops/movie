import { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import Cart from "./Cart"
function MovieList ({ movie, setMovie }){
const [search, setSearch] = useState('')
const [rate, setRate] = useState('')
console.log(search)
const ratingChanged = (newRating) => {
    setRate(newRating);
  };
   
    return(
        <div>
           <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
           <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
              onChange={ratingChanged}
            />
            {movie.filter((el) => 
                   el.name.toLowerCase().includes(search.toLowerCase()) && el.rating >= rate
            ).map((el) => (
        <Cart e={el}/>
        ))}
        </div>
    )
    
}
export default MovieList