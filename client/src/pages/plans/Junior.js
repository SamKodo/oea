import React, { Fragment, useEffect, useContext, useState } from "react";
import { UserContext } from "../../context";
import "./Junior.css";
import Nav from "../../components/Nav";
import ReactPlayer from "react-player";

import { Header } from "../Header/Header";

import { Posts } from "../Posts/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Junior = ({ history, match }) => {
  const [state, setState] = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5100/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.nickname);
      });
    check();

    // console.log("MATCH", match);
    const plan = match.path.split("/")[1].toUpperCase(); // basic
    if (!result.includes(plan)) {
      history.push("/");
    }
  }, [state && state.user]);

  return (
    <>
      <div>
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Junior;
