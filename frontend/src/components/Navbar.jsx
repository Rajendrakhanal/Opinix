import { Link } from "react-router-dom";
import Logo from "../../assets/opinix-white.png";
import "../../styles/components/Navbar.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";

const Navbar = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [initial, setInitial] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setInitial(user.email.charAt(0).toUpperCase());
      setSignedIn(true);
    }
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successful");
        setSignedIn(false);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

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
            <Link className="nav-link" to="/analyze">
              Analyze
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </div>
          <div
            style={
              signedIn
                ? {
                    backgroundColor: "#f2f0eb",
                    borderRadius: "50%",
                    padding: "0.5rem 0.75rem",
                    fontWeight: "900",
                    marginRight: "1rem",
                  }
                : { display: "none" }
            }
          >
            {initial}
          </div>
          {signedIn ? (
            <button className="nav-button-logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="nav-button-login"> Login </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
