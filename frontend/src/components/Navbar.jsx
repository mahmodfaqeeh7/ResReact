import { Link } from 'react-router-dom';
import { faBars, faBook, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbar.css"
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Shawrma ggez</h1>
        </Link>
        <nav>
          <Link to="/menu">
            <button className="nav-button"><FontAwesomeIcon icon={faBars} /> Menu</button>
          </Link>
          <Link to="/our-story">
            <button className="nav-button"><FontAwesomeIcon icon={faBook} /> Our Story</button>
          </Link>
          <Link to="/contact">
            <button className="nav-button"><FontAwesomeIcon icon={faEnvelope} /> Contact</button>
          </Link>
          <Link to="/account">
            <button className="nav-button"><FontAwesomeIcon icon={faUser} /> Account</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
