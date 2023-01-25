import React, { useEffect } from "react";
import "./Singlepost.css";
import ReactPlayer from "react-player";
import { Header } from "../Header/Header";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import { useState } from "react";

export const Singlepost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5100/api/posts/" + path);
      setPost(res.data);
    };
    getPost();
  });

  return (
    <div>
      <div className="SinglePost">
        <div className="singlePostWrapper">
          <ReactPlayer
            width="1400px"
            height="650px"
            controls
            url={post.video}
          />
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Instructeur :
              <Link to={`/?user=${post.username}`} className="linkcol">
                <b>{post.username}</b>
              </Link>
              <b className="singlePostAuthor"></b>
            </span>
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
          <p className="singlePostDesc">{post.desc}</p>
        </div>
      </div>
    </div>
  );
};
