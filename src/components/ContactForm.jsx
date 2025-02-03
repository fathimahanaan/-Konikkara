import React from "react";
import { useState } from "react";
import "../pages/ContactForm.css";
import { handleSubmitFormClick } from "../utils/whatsapp";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; // Function to handle changes in the form inputs

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents the page from refreshing
    handleSubmitFormClick(formData); // Calls the function to open WhatsApp
  };

  return (
    <section id="Contact">
      <h4 className="h4-styling">Get In Touch</h4>
      <div className="contact-container">
        <div className="form-container">
          <div className="form-section">
            <h3>Contact Us</h3>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>

          {/* Image container */}
          <div className="image-container23">
            <div className="opacity-text"></div>
            <p>
              Get in Touch with Us. We’d love to hear from you!. Whether you
              have inquiries about our jewellery collections or business
              opportunities, feel free to reach out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
