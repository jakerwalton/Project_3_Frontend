import React from "react"
import { useState } from "react"
import { useHistory } from "react-router-dom"

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
        <h1>New Restaurant Page</h1>
        <h3>Add a New Restaurant</h3>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newForm.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="text"
              value={newForm.address}
              name="address"
              placeholder="address"
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="text"
              value={newForm.city}
              name="city"
              placeholder="city"
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="state"></label>
            <select id="state" name="state" onChange={handleChange} required>
              <option defaultValue="" disabled>
                State
              </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <br />
            <input
              type="url"
              value={newForm.website}
              name="website"
              placeholder="website"
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="url"
              value={newForm.image}
              name="image"
              placeholder="image"
              onChange={handleChange}
              required
            />
            <br />
            <p>Style (check all that apply)</p>
            <input
              type="checkbox"
              value={newForm.style}
              id="Dine-in"
              name="Dine-in"
              onChange={handleChange}
            ></input>
            <label htmlFor="Dine-in">Dine-in</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Takeout"
              name="Takeout"
              onChange={handleChange}
            ></input>
            <label htmlFor="Takeout">Takeout</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Delivery"
              name="Delivery"
              onChange={handleChange}
            ></input>
            <label htmlFor="Delivery">Delivery</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Foodtruck"
              name="Foodtruck"
              onChange={handleChange}
            ></input>
            <label htmlFor="Foodtruck">Foodtruck</label>
            <br />
            <p>Cuisine (check all that apply)</p>
            <input
              type="checkbox"
              value={newForm.style}
              id="Japanese"
              name="Japanese"
              onChange={handleChange}
            ></input>
            <label htmlFor="Japanese">Japanese</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Sushi"
              name="Sushi"
              onChange={handleChange}
            ></input>
            <label htmlFor="Sushi">Sushi</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Burgers"
              name="Burgers"
              onChange={handleChange}
            ></input>
            <label htmlFor="Burgers">Burgers</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="BBQ"
              name="BBQ"
              onChange={handleChange}
            ></input>
            <label htmlFor="BBQ">BBQ</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Chinese"
              name="Chinese"
              onChange={handleChange}
            ></input>
            <label htmlFor="Chinese">Chinese</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Mexican"
              name="Mexican"
              onChange={handleChange}
            ></input>
            <label htmlFor="Mexican">Mexican</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="American (Traditional)"
              name="American (Traditional)"
              onChange={handleChange}
            ></input>
            <label htmlFor="American (Traditional)">
              American (Traditional)
            </label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Tex-Mex"
              name="Tex-Mex"
              onChange={handleChange}
            ></input>
            <label htmlFor="Tex-Mex">Tex-Mex</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Thai"
              name="Thai"
              onChange={handleChange}
            ></input>
            <label htmlFor="Thai">Thai</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Vietnamese"
              name="Vietnamese"
              onChange={handleChange}
            ></input>
            <label htmlFor="Vietnamese">Vietnamese</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Asian Fusion"
              name="Asian Fusion"
              onChange={handleChange}
            ></input>
            <label htmlFor="Asian Fusion">Asian Fusion</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Soul Food"
              name="Soul Food"
              onChange={handleChange}
            ></input>
            <label htmlFor="Soul Food">Soul Food</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Pizza"
              name="Pizza"
              onChange={handleChange}
            ></input>
            <label htmlFor="Pizza">Pizza</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Ethiopian"
              name="Ethiopian"
              onChange={handleChange}
            ></input>
            <label htmlFor="Ethiopian">Ethiopian</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Seafood"
              name="Seafood"
              onChange={handleChange}
            ></input>
            <label htmlFor="Seafood">Seafood</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Korean"
              name="Korean"
              onChange={handleChange}
            ></input>
            <label htmlFor="Korean">Korean</label>
            <input
              type="checkbox"
              value={newForm.style}
              id="Mediterranean"
              name="Mediterranean"
              onChange={handleChange}
            ></input>
            <label htmlFor="Mediterranean">Mediterranean</label>
            <br />
            <br />
            <input
              type="text"
              value={newForm.user}
              name="user"
              placeholder="your name"
              onChange={handleChange}
            />
            <br />
            <p>Your Rating:</p>
            <input
              type="number"
              value={newForm.userRating}
              name="userRating"
              placeholder="3.7"
              step="0.1"
              onChange={handleChange}
              min="0"
              max="5"
              required
            />{" "}
            out of 5
            <br />
            <p>Your comments:</p>
            <textarea
              name="comments"
              value={newForm.comments}
              placeholder="Their tacos are amazing!"
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <p>Google Rating (optional):</p>
            <input
              type="number"
              value={newForm.googleRating}
              name="googleRating"
              placeholder="3.9"
              step="0.1"
              onChange={handleChange}
              min="0"
              max="5"
            />{" "}
            out of 5
            <br />
            <p>Yelp Rating (optional):</p>
            <input
              type="number"
              value={newForm.yelpRating}
              name="yelpRating"
              placeholder="3.9"
              step="0.1"
              onChange={handleChange}
              min="0"
              max="5"
            />{" "}
            out of 5
            <br />
            <br />
            <br />
            <input type="submit" value="Add Restaurant" />
          </form>
        </section>
      </>
    )
  }
  return props.restaurant ? loaded() : <h2>Loading...</h2>
}

export default New
