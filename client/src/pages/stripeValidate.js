import React, { useEffect, useContext } from "react";
import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import { UserContext } from "../context";

const StripeValidate = ({ history }) => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/subscription-status"
      );
      console.log("SUBSCRIPTION STATUS => ", data);
      if (data && data.length === 0) {
        history.push("/");
      } else {
        //update user in local storage
        const auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        //update user in context
        setState(auth);
        setTimeout(() => {
          history.push("/account");
        }, 1000);
      }
    };

    getSubscriptionStatus();
  }, []);

  return (
    <div
      className="d-flex justify-content-center fw-bold"
      style={{ height: "90vh" }}
    >
      <div className="d-flex align-items-center">
        <SyncOutlined spin style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default StripeValidate;
