import React from "react";
import "../pages/Services.css";
const ServiceCard = ({ icon, title, content, clss }) => {
  return (
    <div className={`service-card ${clss}`}>
      <div alt={title} className="service-icon">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ServiceCard;
