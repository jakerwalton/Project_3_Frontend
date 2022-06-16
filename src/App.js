// React
import { Route, Switch } from "react-router-dom"

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from "./pages/Home";
import Austin from './pages/Austin';
import Detroit from './pages/Detroit';
import Houston from './pages/Houston';
import Raleigh from './pages/Raleigh';

// Stylesheet
import './App.css';


function App() {
  const URL =""; // Back-end Heroku link

  return (
    <div className="App">
      <Header />
      <Switch>
      
      {/* Home Route */}
        <Route exact path="/">
          <Home />
        </Route>
      
      {/* Austin Route */}
        <Route exact path="/austin">
          <Austin />
        </Route>
      
      {/* Detroit Route */}
        <Route exact path="/detroit">
          <Detroit />
        </Route>
      
      {/* Houston Route */}
        <Route exact path="/houston">
          <Houston />
        </Route>
      
      {/* Raleigh Route */}
        <Route exact path="/raleigh">
          <Raleigh />
        </Route>
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
