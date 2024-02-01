import { Link } from "react-router-dom";
import Logo from "../../assets/opinix text white.png";
import "../../styles/components/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navMainDiv">
        <Link to="/">
          <div>
            <img src={Logo} alt="Opinix" className="logo" />
          </div>
        </Link>
        <div className="navBottomDiv">
          <Link to="/analyze" className="customLink">
            Analyze
          </Link>
          <Link to="/about" className="customLink">
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
