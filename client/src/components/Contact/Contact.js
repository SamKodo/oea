import React from "react";
import { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Nav from "../Nav";

export const Contact = () => {
  const { formState, setFormState } = useState({});
  const { mailState, setMailState } = useState(false);

  const ChangeHangler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_w0ixvzb",
      "template_oklsfg6",
      e.target,
      "user_zckwewvvO41fpTEp5BudL"
    );
    window.open("http://localhost:3000");
  }

  return (
    <>
      <Nav />
      <div className="corp">
        <h1>Nous Contacter</h1>{" "}
        <div className="contactForm">
          <form className="contactData" onSubmit={sendEmail}>
            <label>name</label>
            <input
              className="contactStyle"
              type="text"
              name="name"
              placeholder="Entrez votre nom"
            ></input>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Saisissez votre email "
            ></input>
            <label>Message</label>
            <textarea
              className="messageStyle"
              name="message"
              rows="8"
            ></textarea>
            <input className="formCtrl" type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </>
  );
};
