import React from "react";
import "./Adminregister.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { red } from "@mui/material/colors";

export const Adminregister = () => {
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5100/api/auth/register", {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/adminwrite");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <h4 className="admintitre"> ADMIN REGISTER</h4>
      <div className="adminLogin">
        <form className="loginForm" onSubmit={handleSubmit}>
          <label> Username</label>
          <input
            type="text"
            placeholder="enter your username"
            className="inputcol"
            onChange={(e) => setUserame(e.target.value)}
          />
          <label> Email</label>
          <input
            type="text"
            placeholder="enter your Admin email"
            className="inputcol"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="enter your Admin Password"
            className="inputcol"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" type="submit">
            {" "}
            Admin Register
          </button>
          {error && <span style={{ color: "red" }}>Erreur de compte !</span>}
          <Link to="/adminlogin">
            {" "}
            <button className="loginRegisterButton">Admin login</button>
          </Link>
        </form>
      </div>
    </>
  );
};
