import { Link } from "react-router-dom";
import "../Styles/Components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">Pharbit</div>
      
      <ul className="navbar-links">
        <li>Software</li>
        <li>Security</li>
        <li>Developers</li>
        <li>Governance</li>
      </ul>

      {/* The Icon itself is now the Login Link */}
      <Link to="/auth" className="navbar-menu-link" title="Admin Access">
        <div className="navbar-menu-icon">
          <span></span>
          <span></span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;