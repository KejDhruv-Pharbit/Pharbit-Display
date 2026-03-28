import "../Styles/Components/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">Pharbit</div>
      <ul className="navbar-links">
        <li>Markets</li>
        <li>Security</li>
        <li>Developers</li>
        <li>Governance</li>
      </ul>
      <div className="navbar-menu-icon">
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;