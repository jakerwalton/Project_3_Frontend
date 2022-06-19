import React from "react";
import { Link } from "react";

// Cards
function Card(props) {
  const loaded = () => {
    return props.restaurants.map((restaurant) => (
      <div key={restaurant._id} className="restaurant">
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.cuisine[0]}</h3>
        <h4>{restaurant.userRating} / 5</h4>
        <p>Reviewed by: {restaurant.user}</p>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.restaurants ? loaded() : loading();
}

export default Card;
