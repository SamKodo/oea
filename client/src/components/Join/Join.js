import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PriceCard from "../cards/PriceCard";
import { UserContext } from "../../context";
import "./Join.css";
import Footer from "../Footer/Footer";

const Join = ({ history }) => {
  const [state, setState] = useContext(UserContext);
  const [prices, setPrices] = useState([]);
  const [userSubscriptions, setUserSubsciptions] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.id);
      });
    check();

    setUserSubsciptions(result);
  }, [state && state.user]);

  const fetchPrices = async () => {
    const { data } = await axios.get("http://localhost:8000/api/prices");
    console.log("prices get request", data);
    setPrices(data);
  };

  const handleClick = async (e, price) => {
    e.preventDefault();
    if (userSubscriptions && userSubscriptions.includes(price.id)) {
      history.push(`/${price.nickname.toLowerCase()}`);
      return;
    }
    // console.log("plan clicked", price.id);
    if (state && state.token) {
      const { data } = await axios.post(
        "http://localhost:8000/api/create-subscription",
        {
          priceId: price.id,
        }
      );
      window.open(data);
    } else {
      history.push("/register");
    }
  };

  return (
    <>
      
      <div className="headStyle">
      <h6 className="titre">
              <strong>CHOISIS TON PLAN D'ABONNEMENT POUR COMMENCER</strong>
              </h6>
      </div>
      <div>

        <div className="contenu">
          
          <div className="center">
            {prices &&
              prices.map(
                (price, index) =>
                  index < 3 && (
                    <PriceCard
                      key={price.id}
                      price={price}
                      handleSubscription={handleClick}
                      userSubscriptions={userSubscriptions}
                    />
                  )
              )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Join;
