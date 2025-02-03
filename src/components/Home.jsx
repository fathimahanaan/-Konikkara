import React from "react";
import "../pages/Home.css"; // Add your styles
import { handleEnquiryFormClick } from "../utils/whatsapp";
// No need to import Navbar again
// import Navbar from "./Navbar"; // Remove this if Navbar is already in App.js

const Home = () => {
  return (
    <section id="Home" className="home">
      <div className="home-container">
        <div className="content">
          <div className="des">
            <h1 className="heading">Crafted with Tradition and Elegance.</h1>
            <p className="description">
              Explore our unique collection and embrace true artistry.
            </p>
            <button onClick={handleEnquiryFormClick} className="cta-button">
              Contact us
            </button>
          </div>
          <div className="img"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
