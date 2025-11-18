import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email:", value: "Suitsangitasahoo@gmail.com" },
    { icon: <FaPhone />, label: "Tel:", value: "+91 7681027767" },
  ];

  return (
    <div id="contact" className="contact-container">
      <h2 className="title">Get in touch</h2>
      <p className="subtitle">
        Do you have a project in your mind, contact me here
      </p>

      <div className="contact-content">
        
        <div className="contact-info">
          <h3>Find Me ↩</h3>
          {contactInfo.map((item, index) => (
            <p key={index} className="info-item">
              {item.icon} {item.label} {item.value}
            </p>
          ))}
        </div>

       
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <textarea id="text" placeholder="Message" rows="5" required></textarea>
          
        </form>
        <button type="submit" className="send-btn">
            Send ✈
          </button>
      </div>
    </div>
  );
};

export default Contact;
