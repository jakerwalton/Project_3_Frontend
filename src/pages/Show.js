import { useState, useEffect } from "react"
import Form from "../components/Form"
import { useRouteMatch } from "react-router-dom"


function Show(props) {
  const match = useRouteMatch("/restaurant/:id")
  const id = props.match.params.id
  const restaurant = props?.restaurant?.find((p) => p._id === id)
  
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(restaurant)
  const formType = editForm


  const displayEdit = () => {
    setShowForm(!showForm)
  }
  
  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { ...restaurant } = editForm
    props.updateRestaurant({ ...restaurant }, id)
    props.history.push(`/${restaurant.city}`)
  }

  const handleRemoveRestaurant = (id) => {
    props.deleteRestaurant(id)
    props.history.push(`/${restaurant.city}`)
  }

  useEffect(() => {
    if (restaurant) {
      setEditForm(restaurant)
    }
  }, [restaurant])

  return (
    <>
      <div key={restaurant?._id} className="show-card">
        <h1 className="show-h1">{restaurant?.name}</h1>
        <img
          src={restaurant?.image}
          alt={restaurant?.name}
          className="
        show-card-image"
        ></img>
        <p>{restaurant?.address}</p>
        <p>{restaurant?.city}</p>
        <p>{restaurant?.state}</p>
        <p>{restaurant?.sstyle}</p>
        <h3>{restaurant?.cuisine.join(" / ")}</h3>
        <h4>Users Rating: {restaurant?.userRating} / 5</h4>
        <h4>Google Rating: {restaurant?.googleRating} / 5</h4>
        <h4>Yelp Reviews: {restaurant?.yelpRating} / 5</h4>
        <p>"{restaurant?.comments}"</p>
        <p>Reviewed by: {restaurant?.user}</p>
        <button
          onClick={() => {displayEdit()}}>
            Edit
        </button>
        {props.user && (
          <button onClick={() => handleRemoveRestaurant(restaurant?._id)}>
            Delete Restaurant
          </button>
        )}
        <br />
        <br />
      </div>
      {props.user && (
        <div id="edit-card"className={showForm ? "showForm" : "hideForm"}>
          <br />
          <h2>Edit Restaurant</h2>
            <Form
              formType={formType}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

        </div>
      )}
    </>
  )
}

export default Show
