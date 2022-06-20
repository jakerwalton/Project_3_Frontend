import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Raleigh(props) {
  const [restaurants, setRestaurants] = useState(null);

  const getRestaurants = async () => {
    const response = await fetch(props.URL);
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const loaded = () => {
    const raleigh = restaurants.filter(
      (restaurant) => restaurant.city === "Raleigh"
    );
    console.log(raleigh);

    return raleigh.map((raleigh, index) => (
      <div key={index} className="restaurant-card">
        <h2>{raleigh.name}</h2>
        <Link to={`restaurant/${raleigh._id}`}>
          <img
            src={raleigh.image}
            alt={raleigh.name}
            className="restaurant-card-image"
          ></img>
        </Link>
        <h3>{raleigh.cuisine[0]}</h3>
        <h4>{raleigh.userRating} / 5</h4>
        <p>Reviewed by: {raleigh.user}</p>
        {/* <p>{restaurant.comments}</p> */}
        <li>
          <a href={raleigh.website} id="weblink">
            {raleigh.name}
          </a>
        </li>
      </div>
    ));
  };
  return restaurants ? loaded() : <h2>Loading...</h2>;
}

export default Raleigh;
