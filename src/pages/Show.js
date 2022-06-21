
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

  };

  const handleRemoveRestaurant = (id) => {
    props.deleteRestaurant(id);
    props.history.push('/')
  };

  useEffect(() => {
    if(restaurant){
      setEditForm(restaurant);
    }
  }, [restaurant]);

  return (
    <>
      <div>
        <p>{restaurant?.name}</p>
        <button onClick={() => handleRemoveRestaurant(restaurant?._id)}>Delete Restaurant</button>
        <Form
          formType={formType}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  )
}

export default Show
