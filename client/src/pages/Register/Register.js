import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Button from "@mui/joy/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context";
import { Typography } from "@mui/material";
import back from "../images/back.jpg";
import "./Register.css";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // context
  const [state, setState] = useContext(UserContext);

  const handleClick = async (e) => {
    // console.log(name, email, password);
    try {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
      console.log(data);

      if (data.error) {
        toast.error(data.error);
      } else {
        setName("");
        setEmail("");
        setPassword("");
        toast.success(
          `Hey ${data.user.name}. You are part of team now. Congrats!`
        );
        setState(data);
        localStorage.setItem("auth", JSON.stringify(data));
        history.push("/rejoindre");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <>
      <div className="site-wrap d-md-flex align-items-stretch">
        <div className="bgimg">
          <img className="bgimg" src={back} />
        </div>
        <div className="form-wrap">
          <div className="form-inner">
            <h5 className="title">CREE TON COMPTE </h5>
            <p className="caption ">
              la creation de compte ne prend que quelques secondes.
            </p>

            <form action="#" class="pt-3" onSubmit={handleClick}>
              <div className="form-floating">
                <div>Pseudonyme</div>
                <Input
                  value={name}
                  setValue={setName}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Pseudo"
                />
              </div>

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
                  type="password"
                  className="formcontrol"
                />
              </div>

              <div className="d-grid mb-4">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#43a047",
                    color: "white",
                    fontWeight: "bolder",
                    height: 70,
                    borderRadius: 30,
                  }}
                >
                  Je Cree Mon Compte
                </Button>
              </div>

              <div className="mb-2">
                Deja Membre ? <a href="index.html">Log in</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
