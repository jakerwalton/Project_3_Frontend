import React from "react"
import { useState } from "react"

function Show(props) {
  const id = props.match.params.id
  console.log(id)
  const restaurant = props.restaurant.find((p) => p._id === id)
  console.log(restaurant)

  return (
    <>
      <div>
        <p>{restaurant.name}</p>
      </div>
    </>
  )
}

export default Show
