import React from "react";
import "../pages/Footer.css"; // Import the CSS file for styling
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="hanaan">
        {/* Logo and Social Links */}
        <div className="footer-logo-social">
          <a href="#Home">
            <img src="Footer.png"></img>
          </a>
          <div className="social-links">
            <a href="https://www.instagram.com/konikkara_gold_diamonds?igsh=MWd5c2JqNHVuenJ3ZQ==">
              <p>
                <BsInstagram color="white" size={24} />
              </p>
            </a>
            <a href="https://www.facebook.com/share/19TtyRLcnX/?mibextid=wwXIfr">
              <p>
                <FaFacebookSquare color="white" size={24} />
              </p>
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div className="footer-sec">
          <h4>Company</h4>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Collection">Collections</a>
          <a href="#Contact">Contact</a>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <MdLocationPin size={19} /> Royal Diamond Building ,Suite M.03,
            Deira, Dubai,UAE
          </p>
          <p>
            <MdEmail size={17} /> konikkarajewelleryuae@gmail.com
          </p>
          <p>
            <FaPhoneAlt size={17} /> 043432366
          </p>
          <p>
            <FaMobileButton size={17} /> 0525585916
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Konikkara Jewellery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
