import React, { useState } from "react";
import "../CSS/Contact.css";
import Nav from "./Nav";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    console.log("Form Submitted:", formData);
    setSuccessMessage("Your message has been sent successfully! ✅");

    // Clear the form after submission
    setFormData({ name: "", email: "", message: "" });

    // Hide success message after 4 seconds
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return <>
      <Nav />
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Have questions or want to connect? Drop a message below.</p>

        {successMessage && <p className="success-message">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </>

};

export default ContactForm;
