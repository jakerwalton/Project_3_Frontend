import React from "react"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Form from "../components/Form"

function New(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    website: "",
    image: "",
    style: [],
    cuisine: [],
    user: "",
    userRating: "",
    comments: "",
    googleRating: "",
    yelpRating: "",
  })
  let formType = newForm

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  }

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createRestaurant(newForm)
    setNewForm({ ...newForm })
    history.push("/")
  }

  const loaded = () => {
    return (
      <>
        <div className="new-container">
          <h1 className="new-h1">New Restaurant Page</h1>
          <h3>Add a New Restaurant</h3>
          <div className="new-form-container">
            <section>
              <Form
                formType={formType}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </section>
          </div>
        </div>
      </>
    )
  }
  return props.restaurant ? loaded() : <h2>Loading...</h2>
}

export default New
