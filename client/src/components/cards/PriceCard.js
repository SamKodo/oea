import React, { useContext } from "react";
import { UserContext } from "../../context";
import "./pricecard.css";

const PriceCard = ({ price, handleSubscription, userSubscriptions }) => {
  const [state] = useContext(UserContext);

  const dynamicDescription = () => {
    if (price.nickname === "JUNIOR") {
      return "Formations en languages programmation";
    } else if (price.nickname === "SENIOR") {
      return "Formations en programmation et en Technologie";
    } else if (price.nickname === "PRO") {
      return "12 Mois de formations en programmation";
    }
  };

  const buttonStyle = () => {
    return price.nickname === "JUNIOR" ? "bg-primary text-light" : "";
  };

  const headerStyle = () => {
    return price.nickname === "SENIOR" ? "bg-primary text-light" : "";
  };

  const borderStyle = () => {
    return price.nickname === "PRO" ? "bg-primary text-light" : "";
  };

  const buttonText = () => {
    return state && state.token ? "CHOISIR" : "SIGN UP";
  };

  return (
    <>
      <div className="col">
        <div className={`card mb-5 rounded-3 shadow-sm ${borderStyle()}`}>
          <div className={`card-header py-3 bg-primary  ${headerStyle()}`}>
            <h1
              style={{
                color: "white",

                fontFamily: "sans-serif",
                fontSize: 40,
              }}
            >
              {price.nickname}
            </h1>
          </div>

          <div className="card-body">
            <h1
              style={{
                color: "black",

                fontFamily: "sans-serif",
              }}
            >
              {(Math.round(price.unit_amount) / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
              <small className="text-muted fw-light">/mo</small>
            </h1>
            <button
              style={{
                color: "#00b0ff",

                fontFamily: "sans-serif",
              }}
              onClick={(e) => handleSubscription(e, price)}
              className={`w-100 btn btn-lg ${buttonStyle()}`}
            >
              {userSubscriptions && userSubscriptions.includes(price.id)
                ? "Active"
                : buttonText()}
            </button>

            <ul className="list-unstyled mt-3 mb-4">
              <li className="fw-bold">{dynamicDescription()}</li>
              <br />
              <li>✔Cours theoriques et pratiques avec exercices</li>
              <br />

              <li>
                ✔Delivrance d'attestations et Mise en relation avec les
                Entreprises pour Embauche d'emplois
              </li>
            </ul>

            {/* <pre>{JSON.stringify(price, null, 4)}</pre> */}

            {/* <Link to="/register"> */}

            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
