import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <form className="contact-form">
        <input type="text" placeholder="Nama Anda" className="contact-input" />
        <input
          type="email"
          placeholder="Email Anda"
          className="contact-input"
        />
        <textarea placeholder="Pesan Anda..." className="contact-textarea" />
        <button type="submit" className="contact-button">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Contact;
