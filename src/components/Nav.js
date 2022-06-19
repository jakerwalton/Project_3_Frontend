// React
import { Link } from "react-router-dom";

// Stylesheet
import '../App.css';

function Nav(props) {
    return (
        <nav className="nav">
            <ul className="links">
            <li>
                <a href="/"  className="active">
                    Home
                </a>
            </li>
            <li>
                <a href="/austin"  className="active">
                    Austin
                </a>
            </li>
            <li>
                <a href="/detroit"  className="active">
                    Detroit
                </a>
            </li>
            <li>
                <a href="/houston"  className="active">
                    Houston
                </a>
            </li>
            <li>
                <a href="/raleigh"  className="active">
                    Raleigh
                </a>
            </li>
            </ul>
        </nav>
    );
};
  
  export default Nav;