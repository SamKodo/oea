import React from "react";
import { Post } from "../Post/Post";
import "./Posts.css";
import { Header } from "../Header/Header";

export const Posts = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="posts">
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </>
  );
};
