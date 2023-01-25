import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context";

const AuthRoutes = ({ ...rest }) => {
  const [state, setState] = useContext(UserContext);
  if (!state) {
    return <Redirect to="/login" />;
  }
  return state && state.token ? <Route {...rest} /> : "";
};

export default AuthRoutes;
