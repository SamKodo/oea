import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Typography,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context";
import { useState } from "react";
import logo from "./pic/logo.png";
import { Context } from "../Contexts/Context";

import "./nav.css";

const Nav = ({ userSubscriptions, price }) => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);

  const [state, setState] = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    setState({ user: {}, token: "" });
    localStorage.removeItem("auth");
    history.push("/login");
  };

  const buttonText = () => {
    return state && state.token ? "MES COURS" : "";
  };

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <Link to="/">
            {" "}
            <div className="logo">
              <img className="logo" src={logo} />
            </div>
          </Link>
          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li className="topListItem" onClick={handleLogout}>
                {user && "LOGOUT"}
              </li>
              <li className="topListItem">
                <Link className="writecol" to="/write">
                  {user && "ADMIN WRITE"}
                </Link>
              </li>

              <Link to="/">
                <li>
                  <a href="#features">Home</a>
                </li>
              </Link>

              <li>
                <a href="#features">Blog</a>
              </li>

              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <Link to="/account">
                  {userSubscriptions && userSubscriptions.includes(price.id)
                    ? "ACTIVE"
                    : buttonText()}
                </Link>
              </li>

              <Link to="/contactus">
                <li>
                  <a href="contact">contact</a>
                </li>
              </Link>
              <li>
                <Link to="/rejoindre">
                  <Button
                    className="home-btn"
                    style={{
                      background: "#c500df",
                      color: "white",
                      width: 100,
                      height: 50,

                      fontWeight: 700,
                    }}
                  >
                    DEMARRER
                  </Button>
                </Link>
              </li>
              {state && state.token ? (
                <li>
                  <li>
                    <Link onClick={logout} style={{ marginLeft: 15 }}>
                      Deconnecter
                    </Link>
                  </li>
                </li>
              ) : (
                <div>
                  <ul>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </div>
              )}
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>

      {/*<nav className="navbar">
      <div>
        <ul className="header">


          {state && state.token ? (
            <div className="header">
              

              <FormControl
                sx={{ minWidth: 100 }}
                style={{ color: "white" }}
                className="formColor"
              >
                <InputLabel>
                  {" "}
                  <Typography>MENU</Typography>
                </InputLabel>
                <Select style={{ background: "orange" }} className="selectMenu">
                  <li>
                    <Link className="header" to="/account">
                      <MenuItem>
                        <Typography style={{ color: "black" }}>
                          Compte
                        </Typography>
                      </MenuItem>
                    </Link>
                  </li>

                  <MenuItem>
                    <li>
                      <Link className="header" onClick={logout}>
                        <Typography style={{ color: "black" }}>
                          Logout
                        </Typography>
                      </Link>
                    </li>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          ) : (
            <div className="header">
              <Button variant="contained" style={{ backgroundColor: "red" }}>
                <Link
                  href="#"
                  to="/register"
                  style={{ textDecoration: "none" }}
                >
                  <Typography style={{ color: "white" }}>Sign up</Typography>
                </Link>
              </Button>
              <Link className="header" to="/login">
                Login
              </Link>
            </div>
          )}
        </ul>
      </div>
          </nav>*/}
    </>
  );
};

export default Nav;
