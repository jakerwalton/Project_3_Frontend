import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/austin">
                <div>Austin</div>
            </Link>
            <Link to="/detroit">
                <div>Detroit</div>
            </Link>
            <Link to="/houston">
                <div>Houston</div>
            </Link>
            <Link to="/raleigh">
                <div>Raleigh</div>
            </Link>
        </nav>
    );
};
  
  export default Header;