import { useState, useEffect } from "react"
import Form from "../components/Form"
import { useRouteMatch } from "react-router-dom"

function Show(props) {
  const match = useRouteMatch("/restaurant/:id")
  const id = props.match.params.id
  const restaurant = props?.restaurant?.find((p) => p._id === id)

  const [editForm, setEditForm] = useState(restaurant)
  let formType = editForm

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
      <div key={restaurant._id} className="show-card">
        {/* <Link to={`/restaurant/${restaurant._id}`}> */}
        <h1 className="show-h1">{restaurant?.name}</h1>
        {/* </Link> */}
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="
        show-card-image"
        ></img>
        <h3>{restaurant.cuisine[0]}</h3>
        <h4>{restaurant.userRating} / 5</h4>
        <p>Reviewed by: {restaurant.user}</p>
        <p>{restaurant.comments}</p>
        {props.user && (
          <button onClick={() => handleRemoveRestaurant(restaurant?._id)}>
            Delete Restaurant
          </button>
        )}
        <br />
        <br />
      </div>
      <div className="edit-card">
        <br />
        <h2>Edit Restaurant</h2>
        {props.user && (
          <Form
            formType={formType}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  )
}

export default Show
