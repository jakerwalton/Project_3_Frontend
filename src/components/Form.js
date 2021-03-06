const Form = ({ formType, handleSubmit, handleChange }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset className="restaurant-info-fieldset">
          <legend className="restaurant-info-legend">RESTAURANT INFO</legend>
          <input
            type="text"
            value={formType?.name}
            name="name"
            placeholder="restaurant name"
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            value={formType?.address}
            name="address"
            placeholder="address"
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            value={formType?.city}
            name="city"
            placeholder="city"
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="state"></label>
          <select id="state" name="state" onChange={handleChange} required>
            <option defaultValue="State" selected disabled>
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
            value={formType?.website}
            name="website"
            placeholder="restaurant website"
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="url"
            value={formType?.image}
            name="image"
            placeholder="restaurant image / logo url"
            onChange={handleChange}
            required
          />
          <br />
          <fieldset className="style-fieldset">
            <legend className="style-legend">
              <p>Style (check all that apply)</p>
            </legend>
            <input
              type="checkbox"
              value={formType?.style}
              id="Dine-in"
              name="Dine-in"
              onChange={handleChange}
            ></input>
            <label htmlFor="Dine-in">Dine-in</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Takeout"
              name="Takeout"
              onChange={handleChange}
            ></input>
            <label htmlFor="Takeout">Takeout</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Delivery"
              name="Delivery"
              onChange={handleChange}
            ></input>
            <label htmlFor="Delivery">Delivery</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Foodtruck"
              name="Foodtruck"
              onChange={handleChange}
            ></input>
            <label htmlFor="Foodtruck">Foodtruck</label>
          </fieldset>
          <br />
          <fieldset className="cuisine-fieldset">
            <legend className="cuisine-legend">
              <p>Cuisine (check all that apply)</p>
            </legend>
            <input
              type="checkbox"
              value={formType?.style}
              id="Japanese"
              name="Japanese"
              onChange={handleChange}
            ></input>
            <label htmlFor="Japanese">Japanese</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Sushi"
              name="Sushi"
              onChange={handleChange}
            ></input>
            <label htmlFor="Sushi">Sushi</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Burgers"
              name="Burgers"
              onChange={handleChange}
            ></input>
            <label htmlFor="Burgers">Burgers</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="BBQ"
              name="BBQ"
              onChange={handleChange}
            ></input>
            <label htmlFor="BBQ">BBQ</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Chinese"
              name="Chinese"
              onChange={handleChange}
            ></input>
            <label htmlFor="Chinese">Chinese</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Mexican"
              name="Mexican"
              onChange={handleChange}
            ></input>
            <label htmlFor="Mexican">Mexican</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="American (Traditional)"
              name="American (Traditional)"
              onChange={handleChange}
            ></input>
            <label htmlFor="American (Traditional)">
              American (Traditional)
            </label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Tex-Mex"
              name="Tex-Mex"
              onChange={handleChange}
            ></input>
            <label htmlFor="Tex-Mex">Tex-Mex</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Thai"
              name="Thai"
              onChange={handleChange}
            ></input>
            <label htmlFor="Thai">Thai</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Vietnamese"
              name="Vietnamese"
              onChange={handleChange}
            ></input>
            <label htmlFor="Vietnamese">Vietnamese</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Asian Fusion"
              name="Asian Fusion"
              onChange={handleChange}
            ></input>
            <label htmlFor="Asian Fusion">Asian Fusion</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Soul Food"
              name="Soul Food"
              onChange={handleChange}
            ></input>
            <label htmlFor="Soul Food">Soul Food</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Pizza"
              name="Pizza"
              onChange={handleChange}
            ></input>
            <label htmlFor="Pizza">Pizza</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Ethiopian"
              name="Ethiopian"
              onChange={handleChange}
            ></input>
            <label htmlFor="Ethiopian">Ethiopian</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Seafood"
              name="Seafood"
              onChange={handleChange}
            ></input>
            <label htmlFor="Seafood">Seafood</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Korean"
              name="Korean"
              onChange={handleChange}
            ></input>
            <label htmlFor="Korean">Korean</label>
            <input
              type="checkbox"
              value={formType?.style}
              id="Mediterranean"
              name="Mediterranean"
              onChange={handleChange}
            ></input>
            <label htmlFor="Mediterranean">Mediterranean</label>
          </fieldset>
          <p>Google Rating (optional):</p>
          <input
            type="number"
            value={formType?.googleRating}
            name="googleRating"
            placeholder="3.9"
            step="0.1"
            onChange={handleChange}
            min="0"
            max="5"
          />{' '}
          out of 5
          <br />
          <p>Yelp Rating (optional):</p>
          <input
            type="number"
            value={formType?.yelpRating}
            name="yelpRating"
            placeholder="3.9"
            step="0.1"
            onChange={handleChange}
            min="0"
            max="5"
          />{' '}
          out of 5
        </fieldset>
        <br />
        <fieldset className="user-name-fieldset">
          <legend className="user-name-legend">YOUR INFO</legend>
          <p>Your Rating:</p>
          <input
            type="number"
            value={formType?.userRating}
            name="userRating"
            placeholder="3.7"
            step="0.1"
            onChange={handleChange}
            min="0"
            max="5"
            required
          />{' '}
          out of 5
          <br />
          <p>Your comments:</p>
          <textarea
            name="comments"
            value={formType?.comments}
            placeholder="Their tacos are amazing!"
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <br />
          <input
            type="text"
            value={formType?.user}
            name="user"
            placeholder="your name"
            onChange={handleChange}
          />
          <br />
          <br />
          <br />
          <input className="form-submit" type="submit" value="SUBMIT" />
        </fieldset>
      </form>
    </div>
  )
}

export default Form
