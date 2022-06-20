import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Detroit(props) {
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
    const detroit = restaurants.filter(
      (restaurant) => restaurant.city === "Detroit"
    )
    console.log(detroit)

    return detroit.map((detroit, index) => (
      <div key={index} className="restaurant-card">
        <h2>{detroit.name}</h2>
        <Link to={`restaurant/${detroit._id}`}>
          <img
            src={detroit.image}
            alt={detroit.name}
            className="restaurant-card-image"
          ></img>
        </Link>
        <h3>{detroit.cuisine[0]}</h3>
        <h4>{detroit.userRating} / 5</h4>
        <p>Reviewed by: {detroit.user}</p>
        {/* <p>{restaurant.comments}</p> */}
        <li>
          <a href={detroit.website} id="weblink">
            {detroit.name}
          </a>
        </li>
      </div>
    ))
  }
  return restaurants ? loaded() : <h2>Loading...</h2>
}

export default Detroit
