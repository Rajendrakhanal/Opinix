import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords dont match");
    } else if (password.length < 6) {
      alert("password is too short");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // userCredentials is whatever the createUWEandP returns
          navigate("/");
          console.log("Successfully registered");
          const user = userCredential.user;
          user.displayName = name;
          console.log(user);
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
    }
  };

  return (
    <>
      Register
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          Enter Name
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
          />
          Enter Password
        </div>
        <div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          Confirm Password
        </div>
        <button>Submit</button>
        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
