import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        navigate("/");
        console.log("Successfully signed in");
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert("invalid credentials");
      });
  };
  return (
    <>
      Login
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          Enter Email
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          Enter Password
        </div>
        <button>Submit</button>
        <div>
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
