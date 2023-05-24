
import React from "react";
import ReactStars from "react-rating-stars-component";
const Cart = ({e}) => {
    return(
        <div>
        <body>
        <div class="card-list">
               <div class="card">
                  <div class="card-image">
               <img src={e.image} alt="London trip"/>
                  </div>
                  <div class="card-body">
                  <h2>{e.name}</h2>
                  
            <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
              value={e.rating}
              edit={false}
            />,
          
                  <h2>{e.seasons}</h2>
                  <p>{e.description}</p>
                  </div>
               <div class="card-footer">
                <div class="info">
                    <div class="value">{e.date}</div>
                    <div class="type">Date</div>
                </div>
                <div class="info">
                    <div class="value">{e.type}</div>
                    <div class="type">Type</div>
                </div>
                <div class="info">
                    <div class="value">{e.rating}</div>
                    <div class="type">rating</div>
                </div>
            </div>
            </div>
        </div>
        </body>
        </div>
    )
}
export default Cart