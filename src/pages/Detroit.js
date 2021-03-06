import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Dcity from "../assets/Detroit.png"
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
        <h3>{detroit.cuisine.join(" • ")}</h3>
        <h4>{detroit.userRating} / 5</h4>
        <p>Reviewed by: {detroit.user}</p>
        {/* <p>{restaurant.comments}</p> */}
       
      </div>
    ))
  }

  const loading = () => {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1 className="city-h1">Detroit</h1>
      <div>
        <img src={Dcity} alt="city pic" className="pic" />
      </div>

      <div className="card-container">{restaurants ? loaded() : loading()}</div>
    </div>
  )
}

export default Detroit
