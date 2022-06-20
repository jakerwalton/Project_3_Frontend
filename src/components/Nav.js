// React
import { Link } from "react-router-dom"

// Stylesheet
import "../App.css"

function Nav(props) {
  return (
    <nav className="nav">
      <ul className="links">
        <li>
          <a href="/" id="home">
            Home
          </a>
        </li>
        <li>
          <a href="/austin" id="austin">
            Austin
          </a>
        </li>
        <li>
          <a href="/detroit" id="detroit">
            Detroit
          </a>
        </li>
        <li>
          <a href="/houston" id="houston">
            Houston
          </a>
        </li>
        <li>
          <a href="/raleigh" id="raleigh">
            Raleigh
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
