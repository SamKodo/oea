import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import "./Write.css";
import { Context } from "../../Contexts/Context";

export const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [video, setVideo] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      video,
    };
    try {
      const res = await axios.post("http://localhost:5100/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <>
      <h3 className="pageAdmin"> BIENVENUE SUR LA PAGE ADMIN</h3>
      <div className="write">
        <hr />

        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <input
              type="text"
              placeholder="Titre de la Video..."
              className="mytext"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lien de la Video..."
              className="mytext"
              onChange={(e) => setVideo(e.target.value)}
            />

            <textarea
              placeholder="Description du cours ..."
              className="champTexte"
              type="text"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <button className="btnPublier" type="submit">
              PUBLIER
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
