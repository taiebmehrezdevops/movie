import React from "react"
import Cart from "./Cart"
function MovieList ({ movie, setMovie }){
    
    return(
        <div>
            {movie.map((el) => (
        <Cart e={el}/>
        ))}
        </div>
    )
    
}
export default MovieList