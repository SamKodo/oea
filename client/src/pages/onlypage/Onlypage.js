import React from "react";
import { Header } from "../Header/Header";
import { Singlepost } from "../singlePage/Singlepost";
import "./Onlypage.css";

export const Onlypage = () => {
  return (
    <>
      <Header />
      <div className="Onlypage">
        <Singlepost />
      </div>
    </>
  );
};
