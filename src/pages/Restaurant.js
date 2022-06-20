import React from "react";

function Restaurant(props) {
  const id = props.match.params.id;
  const restaurants = props.restaurants;
  const restaurant = restaurants.find((p) => p.id === id);
  return <div>Restaurant</div>;
}

export default Restaurant;
