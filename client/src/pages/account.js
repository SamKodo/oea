import React, { useState, useEffect, useContext } from "react";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { UserContext } from "../context";
import moment from "moment";
import { Avatar, Button } from "@mui/material";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Account = ({ history }) => {
  const [state, setState] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/subscriptions"
      );
      console.log("subs => ", data);
      setSubscriptions(data.data);
    };

    if (state && state.token) getSubscriptions();
  }, [state && state.token]);

  const manageSubscriptions = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/api/customer-portal"
    );
    window.open(data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Compte</h1>
          <p className="lead pb-4">Status de ma souscription</p>
          <Link to="/rejoindre">
            {" "}
            <Button
              style={{
                color: "white",
                background: "orange",
                height: 50,
                borderRadius: 8,
              }}
            >
              SOUSCRIS POUR ACCEDER A TES COURS{" "}
            </Button>
          </Link>
          {/*<pre>{JSON.stringify(subscriptions, null, 4)}</pre>*/}
        </div>
        <div className="row">
          {subscriptions &&
            subscriptions.map((sub) => (
              <div key={sub.id}>
                <section>
                  <hr />
                  <h4 className="fw-bold">{sub.plan.nickname}</h4>
                  <h5>
                    {(sub.plan.amount / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: sub.plan.currency,
                    })}
                    <p>Status:{sub.status}</p>
                    <p>
                      Card last 4 digit: {sub.default_payment_method.card.last4}
                    </p>
                    <p>
                      Current preriod end:
                      {moment(sub.current_period_end * 1000)
                        .format("dddd, MMMM Do YYYY h:mm:ss a")
                        .toString()}
                    </p>
                    <button
                      onClick={() =>
                        history.push(`/${sub.plan.nickname.toLowerCase()}`)
                      }
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        width: 200,
                        height: 50,
                        borderRadius: 6,
                        marginRight: 9,
                      }}
                    >
                      Acceder a mes cours
                    </button>
                    {/*  <button
                      onClick={manageSubscriptions}
                      className="btn btn-outline-warning"
                    >
                      Parametres de souscription
                    </button>*/}
                  </h5>
                </section>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Account;
