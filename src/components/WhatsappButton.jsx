import React from "react";
import "../pages/WhatsappButton.css";
import { handleEnquiryFormClick } from "../utils/whatsapp";

const WhatsappButton = () => {
  return (
    <img
      onClick={handleEnquiryFormClick}
      className="whatsapp-image"
      src="/whatsappIcon.png"
      alt="WhatsApp"
    ></img>
  );
};

export default WhatsappButton;
