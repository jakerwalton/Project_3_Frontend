// React
import { Route, Switch } from "react-router-dom"
import { useState, useEffect } from "react"
import { auth } from "./services/firebase"

// Components
import Header from "./components/Header"
import Footer from "./components/Footer"

// Pages
import Show from "./pages/Show"
import Home from "./pages/Home"
import Austin from "./pages/Austin"
import Detroit from "./pages/Detroit"
import Houston from "./pages/Houston"
import Raleigh from "./pages/Raleigh"
import New from "./pages/New"

// Stylesheet
import "./App.css"
import "./card.css"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user))
    return () => {
      unsubscribe()
    }
  }, [])

  const [restaurant, setRestaurant] = useState(null)
  const URL = "https://project-3-backend-hard.herokuapp.com/all/" // Back-end Heroku link

  const getRestaurant = async () => {
    if (user) return
    const response = await fetch(URL)
    const data = await response.json()
    setRestaurant(data)
  }
  const createRestaurant = async (restaurant) => {
    if (!user) return
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(restaurant),
    })
    getRestaurant()
  }

  const updateRestaurant = async (updatedRestaurant, restaurant) => {
    if (!user) return
    await fetch(URL + restaurant, {
      method: "PUT",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(updatedRestaurant),
    })
    getRestaurant()
  }

  const deleteRestaurant = async (restaurant) => {
    if (!user) return
    await fetch(URL + restaurant, { method: "DELETE" })
    getRestaurant()
  }

  useEffect(() => {
    getRestaurant()
  }, [])

  return (
    <div className="App">
      <Header className="header" user={user} />
      <Switch>
        {/* Home Route */}
        <Route exact path="/">
          <Home URL={URL} />
        </Route>

        {/* Austin Route */}
        <Route exact path="/austin">
          <Austin URL={URL} />
        </Route>

        {/* Detroit Route */}
        <Route exact path="/detroit">
          <Detroit URL={URL} />
        </Route>

        {/* Houston Route */}
        <Route exact path="/houston">
          <Houston URL={URL} />
        </Route>

        {/* Raleigh Route */}
        <Route exact path="/raleigh">
          <Raleigh URL={URL} />
        </Route>

        <Route path="/new">
          <New
            user={user}
            restaurant={restaurant}
            createRestaurant={createRestaurant}
          />
        </Route>

        <Route
          path="/restaurant/:id"
          render={(renderProps) => (
            <Show
              user={user}
              restaurant={restaurant}
              {...renderProps}
              deleteRestaurant={deleteRestaurant}
              updateRestaurant={updateRestaurant}
            />
          )}
        />
      </Switch>
      <Footer className="footer" />
    </div>
  )
}

export default App
