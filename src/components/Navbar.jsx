import React, { useState } from "react";
import "../pages/Navbar.css";
import Navlink from "./Navlink";
import { navData } from "../utils/data";
import { handleEnquiryFormClick } from "../utils/whatsapp";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <a href="#Home">
            <img src="Header.png"></img>
          </a>
        </div>

        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {navData.map((e) => (
              <Navlink key={e.id} {...e} setMenuOpen={setMenuOpen} />
            ))}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <p className="ham" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </p>

        {/* Navigation Links */}

        <button
          onClick={handleEnquiryFormClick}
          className="contact-button contact-btn"
        >
          Enquiry
        </button>
      </div>
    </div>
  );
};

export default Navbar;
