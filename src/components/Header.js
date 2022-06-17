// React
import { Link } from "react-router-dom";

// Stylesheet
import '../App.css';

function Header(props) {
    return (
        <nav className="header">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/austin">
                <button>Austin</button>
            </Link>
            <Link to="/detroit">
                <button>Detroit</button>
            </Link>
            <Link to="/houston">
                <button>Houston</button>
            </Link>
            <Link to="/raleigh">
                <button>Raleigh</button>
            </Link>
        </nav>
    );
};
  
  export default Header;