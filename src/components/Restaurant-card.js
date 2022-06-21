import React from 'react'
import { Link } from 'react'

// Cards
function Card(props) {
  const loaded = () => {
    return props.restaurants.map((restaurant) => (
      <div key={restaurant._id} className="restaurant-card">
        {/* <Link to={`/restaurant/${restaurant._id}`}> */}
        <h2>{restaurant.name}</h2>
        {/* </Link> */}
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="
        restaurant-card-image"
        ></img>
        <h3>{restaurant.cuisine[0]}</h3>
        <h4>{restaurant.userRating} / 5</h4>
        <p>Reviewed by: {restaurant.user}</p>
        {/* <p>{restaurant.comments}</p> */}
        <div id="weblink">
        <li>
                <a href={restaurant.website} id="weblinkA">
                    {restaurant.name}
                </a>
            </li>
        </div>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return props.restaurants ? loaded() : loading()
}

export default Card
