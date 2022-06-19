// React
import { Route, Switch } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Austin from "./pages/Austin";
import Detroit from "./pages/Detroit";
import Houston from "./pages/Houston";
import Raleigh from "./pages/Raleigh";

// Stylesheet
import "./App.css";

function App() {
  const URL = "https://project-3-backend-hard.herokuapp.com/"; // Back-end Heroku link

  return (
    <div className="App">
      <Nav className="nav" />
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
      </Switch>
      <Footer className="footer" />
    </div>
  );
}

export default App;
