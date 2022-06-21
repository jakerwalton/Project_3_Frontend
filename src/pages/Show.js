import React from "react"
import { useState } from "react"

function Show(props) {
  const id = props.match.params.id
  console.log(id)
  const restaurant = props.restaurant.find((p) => p._id === id)
  console.log(restaurant)

  const handleRemoveRestaurant = (id) => {
    props.deleteRestaurant(id);
    props.history.push('/')
  };

  return (
    <>
      <div>
        <p>{restaurant.name}</p>
        <button onClick={() => handleRemoveRestaurant(restaurant._id)}>Delete Restaurant</button>
      </div>
    </>
  )
}

export default Show
