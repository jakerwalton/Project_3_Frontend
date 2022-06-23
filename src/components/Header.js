// React
import { Link } from 'react-router-dom'
import { login, logout } from '../services/firebase'

// Stylesheet
import '../App.css'

function Header(props) {
  const photoStyles = {
    borderRadius: '50%',
    height: '2.5rem',
    margin: '0 1rem',
  }
  return (
    <nav className="nav" id="nav1">
      <Link to="/">
        <button id="home">Home</button>
      </Link>
      <Link to="/houston">
        <button id="houston">Houston</button>
      </Link>
      <Link to="/austin">
        <button id="austin">Austin</button>
      </Link>
      <Link to="/raleigh">
        <button id="raleigh">Raleigh</button>
      </Link>
      <Link to="/detroit">
        <button id="detroit">Detroit</button>
      </Link>
      {props.user ? (
        <>
          <ul className="greeting-list">
            <li className="greeting-list-item">
              Welcome, {props.user.displayName}{' '}
              <img
                style={photoStyles}
                src={props.user.photoURL}
                alt={props.user.displayName}
              />
            </li>
          </ul>
          <button id="logout" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <button id="login" onClick={login}>
          Login
        </button>
      )}
    </nav>
  )
}
// id on buttons
export default Header
