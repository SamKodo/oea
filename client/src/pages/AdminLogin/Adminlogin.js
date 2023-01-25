import React, { useContext, useRef, useState } from "react";
import "./Adminlogin.css";
import { Link } from "react-router-dom";
import { Context } from "../../Contexts/Context";
import axios from "axios";

export const Adminlogin = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [active, setActive] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("http://localhost:5100/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <>
      <h4 className="admintitre"> ADMIN LOGIN</h4>
      <div className="adminLogin">
        <form className="loginForm" onSubmit={handleSubmit}>
          <label> Username</label>
          <input
            type="text"
            placeholder="enter your Username"
            className="inputcol"
            ref={userRef}
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="enter your Admin Password"
            className="inputcol"
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            {" "}
            Admin Login
          </button>
        </form>
      </div>
    </>
  );
};
