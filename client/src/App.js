import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useContext } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Toaster } from "react-hot-toast";
import { stripeSuccess } from "./pages/stripe-success";
import StripeCancel from "./pages/stripe-cancel";
import StripeValidate from "./pages/stripeValidate";
import AuthRoutes from "./components/routes/AuthRoutes";
import Account from "./pages/account";
import Junior from "./pages/plans/Junior";
import Senior from "./pages/plans/Senior";
import Pro from "./pages/plans/Pro";

import Join from "./components/Join/Join";
import { Onlypage } from "./pages/onlypage/Onlypage";
import { Write } from "./pages/Write/Write";
import { Adminlogin } from "./pages/AdminLogin/Adminlogin";
import { Adminregister } from "./pages/AdminRegister/Adminregister";
import { Contact } from "./components/Contact/Contact";

import "./App.css";
import { Context } from "./Contexts/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        {/* <Nav />*/}
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/adminwrite">
            {user ? <Home /> : <Write />}
          </Route>
          <Route exact path="/adminregister">
            {user ? <Home /> : <Adminregister />}
          </Route>
          <Route exact path="/adminlogin">
            {user ? <Home /> : <Adminlogin />}
          </Route>

          <Route exact path="/register" component={Register} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/Login" component={Login} />
          <AuthRoutes exact path="/post/:postID" component={Onlypage} />
          <AuthRoutes exact path="/stripe/sucess" component={stripeSuccess} />
          <AuthRoutes exact path="/stripe/cancel" component={StripeCancel} />
          <AuthRoutes exact path="/stripe/success" component={StripeValidate} />
          <Route exact path="/rejoindre" component={Join} />

          <AuthRoutes exact path="/account" component={Account} />
          <AuthRoutes exact path="/mypage" component={Onlypage} />
          <AuthRoutes exact path="/junior" component={Junior} />
          <AuthRoutes exact path="/senior" component={Senior} />
          <AuthRoutes exact path="/pro" component={Pro} />

          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Router path="/write">{user ? <Write /> : <Register />}</Router>
        </Switch>
      </Router>
    </>
  );
}

export default App;
