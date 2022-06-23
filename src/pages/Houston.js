import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Htown from "../assets/Houstoncity.png"

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
        <h3>{houston.cuisine.join(" • ")}</h3>
        <h4>{houston.userRating} / 5</h4>
        <p>Reviewed by: {houston.user}</p>
        {/* <p>{restaurant.comments}</p> */}
       
      </div>
    ))
  }

  const loading = () => {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1 className="city-h1">Houston</h1>
      <div>
        <img src={Htown} alt="city pic" className="pic" />
      </div>

      <div className="card-container">{restaurants ? loaded() : loading()}</div>
    </div>
  )
}

export default Houston
