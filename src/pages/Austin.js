import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Austin(props) {
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
    const austin = restaurants.filter(
      (restaurant) => restaurant.city === "Austin"
    )
    console.log(austin)

    return austin.map((austin, index) => (
      <div key={index} className="restaurant-card">
        <h2>{austin.name}</h2>
        <Link to={`restaurant/${austin._id}`}>
          <img
            src={austin.image}
            alt={austin.name}
            className="restaurant-card-image"
          ></img>
        </Link>
        <h3>{austin.cuisine[0]}</h3>
        <h4>{austin.userRating} / 5</h4>
        <p>Reviewed by: {austin.user}</p>
        {/* <p>{restaurant.comments}</p> */}
        <li>
          <a href={austin.website} id="weblink">
            {austin.name}
          </a>
        </li>
      </div>
    ))
  }

  const loading = () => {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>Austin</h1>
      <div className="card-container">{restaurants ? loaded() : loading()}</div>
    </div>
  )
}

export default Austin
