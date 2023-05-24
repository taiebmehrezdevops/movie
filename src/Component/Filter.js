import React from "react";
import { moviesData } from "./moviesData";

const Filter = ({ filtermovie, setMovie, r }) => {
    
    return(
        <>
        <div>
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
        </div>
        </>
    )
}
export default Filter;