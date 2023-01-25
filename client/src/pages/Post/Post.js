import { Button } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";

import "./Post.css";

export const Post = ({ post }) => {
  return (
    <div>
      <div className="post">
        <ReactPlayer
          width="300px"
          height="300px"
          className="postImg"
          url={post.video}
        />
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div>
          <span className="postTitles">{post.title}</span>
        </div>
        <div className="postDate">
          {new Date(post.createdAt).toDateString()}
        </div>
        <Link to={`/post/${post._id}`}>
          <Button
            style={{ background: "black", color: "white", width: "200px" }}
          >
            COMMENCER
          </Button>
        </Link>
      </div>
    </div>
  );
};
