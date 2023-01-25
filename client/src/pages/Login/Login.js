import React, { useState, useContext } from "react";

import Input from "../../components/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import "./styles.css";
import { Avatar } from "@mui/material";
import Nav from "../../components/Nav";
import Home from "../Home";
import { Link } from "react-router-dom";
import back2 from "../images/back2.jpg";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useContext(UserContext);

  const handleClick = async (e) => {
    // console.log("email and pass", email, password)
    try {
      e.preventDefault();

      const { data } = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setEmail("");
        setPassword("");
        setState(data);
        localStorage.setItem("auth", JSON.stringify(data));
        history.push("/rejoindre");
      }
    } catch (err) {
      toast.error("something went wrong, try again");
    }
  };

  return (
    <>
      <div className="site-wrap d-md-flex align-items-stretch">
        <div className="bgimg">
          <img className="bgimg" src={back2} />
        </div>
        <div className="form-wrap">
          <div className="form-inner">
            <h1 className="title">Login</h1>
            <p className="caption ">Bienvenu Sur Impact Academie</p>

            <form action="#" class="pt-3" onSubmit={handleClick}>
              <div className="form-floating">
                <div>Adresse email</div>
                <Input
                  value={email}
                  setValue={setEmail}
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>

              <div className="form-floating">
                <div>Mot de passe</div>
                <Input
                  value={password}
                  setValue={setPassword}
                  type="text"
                  className="formcontrol"
                />
              </div>
              <span>mot de passe oulie</span>
              <div className="d-grid mb-4">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#2196f3",
                    color: "white",
                    fontWeight: "bolder",
                    height: 70,
                    borderRadius: 30,
                  }}
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*<div className="login">
        <Typography style={{ color: "white" }}>
          {" "}
          <span className="loginTitle">Login</span>
        </Typography>
        <form onSubmit={handleClick} className="loginForm">
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2" variant="h4" style={{ color: "white" }}>
              Sign in to continue.
            </Typography>
          </div>
          <label>Email</label>
          <Input
            type="text"
            placeholder="Entrez votre email..."
            value={email}
            setValue={setEmail}
            className="loginInput"
          />

          <label>Password</label>
          <Input
            placeholder="Entrez votre mot de passe..."
            type="password"
            value={password}
            setValue={setPassword}
            className="loginInput"
          />

          <button className="loginButton">login</button>
        </form>
  </div>*/}
    </>
  );
};

export default Login;
