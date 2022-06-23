import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Ralcity from "../assets/Raleigh.png"

function Raleigh(props) {
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
    const raleigh = restaurants.filter(
      (restaurant) => restaurant.city === "Raleigh"
    )

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
        <h3>{raleigh.cuisine.join(" • ")}</h3>
        <h4>{raleigh.userRating} / 5</h4>
        <p>Reviewed by: {raleigh.user}</p>
        {/* <p>{restaurant.comments}</p> */}
        <div id="weblink">
          <li>
            <a href={raleigh.website} id="restweb-H">
              {raleigh.name}
            </a>
          </li>
        </div>
      </div>
    ))
  }

  const loading = () => {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1 className="city-h1">Raleigh</h1>
      <div className="raleigh-header">
        {/* <img src={Ralcity} alt="city pic" className="pic" /> */}
      </div>

      <div className="card-container">{restaurants ? loaded() : loading()}</div>
    </div>
  )
}

export default Raleigh
