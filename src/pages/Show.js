
import { useState, useEffect } from "react"
import Form from "../components/Form"
import { useRouteMatch } from "react-router-dom"

function Show(props) {
  const match = useRouteMatch("/restaurant/:id")
  const id = props.match.params.id
  const restaurant = props?.restaurant?.find((p) => p._id === id)
  
  const [editForm, setEditForm] = useState(restaurant);
  let formType = editForm

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { ...restaurant } = editForm;
    props.updateRestaurant({ ...restaurant }, id);
    props.history.push(`/${restaurant.city}`)
  };

  const handleRemoveRestaurant = (id) => {
    props.deleteRestaurant(id);
    props.history.push(`/${restaurant.city}`)
  };

  useEffect(() => {
    if(restaurant){
      setEditForm(restaurant);
    }
  }, [restaurant]);

  return (
    <>
    
      <div className="edit-card">
        <p>{restaurant?.name}</p>
        <button onClick={() => handleRemoveRestaurant(restaurant?._id)}>Delete Restaurant</button>
        <Form
          formType={formType}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div key={restaurant._id} className="show-card">
        {/* <Link to={`/restaurant/${restaurant._id}`}> */}
        <h2>{restaurant.name}</h2>
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
       
        </div>
    </>
  )
}

export default Show
