import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Houston(props) {
  const [restaurants, setRestaurants] = useState(null)

  const getRestaurants = async () => {
    const response = await fetch(props.URL)
    const data = await response.json()
    setRestaurants(data)
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const loaded = () => {
    const houston = restaurants.filter(
      (restaurant) => restaurant.city === "Houston"
    )
    console.log(houston)

    return houston.map((houston, index) => (
      <div key={index} className="restaurant-card">
        <h2>{houston.name}</h2>
        <Link to={`restaurant/${houston._id}`}>
          <img
            src={houston.image}
            alt={houston.name}
            className="restaurant-card-image"
          ></img>
        </Link>
        <h3>{houston.cuisine[0]}</h3>
        <h4>{houston.userRating} / 5</h4>
        <p>Reviewed by: {houston.user}</p>
        {/* <p>{restaurant.comments}</p> */}
        <li>
          <a href={houston.website} id="weblink">
            {houston.name}
          </a>
        </li>
      </div>
    ))
  }
  return restaurants ? loaded() : <h2>Loading...</h2>
}

export default Houston
