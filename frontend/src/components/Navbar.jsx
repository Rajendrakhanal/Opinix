import { Link } from "react-router-dom";
import Logo from "../../assets/opinix-white.png";
import "../../styles/components/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-left-section">
          <Link to="/">
            <div>
              <img className="logo" src={Logo} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="nav-right-section">
          <div className="nav-links">
            <Link className="nav-link" to="/history">
              History
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </div>
          <Link to="/analyze">
            <button className="nav-button">Analyze</button>
          </Link>
          {/*<img src="profile.png" alt="Profile" className="profile" /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
