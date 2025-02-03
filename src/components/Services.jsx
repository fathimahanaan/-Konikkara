import React from "react";
import "../pages/Services.css"; // Add your custom CSS for styling
import ServiceCard from "./ServiceCard";
import { serviceData } from "../utils/data";

const Service = () => {
  return (
    <section id="Services" className="services-section">
      <h2 className="services-heading"> </h2>
      <p className="services-paragraph">
        {/* We are a passionate team focused on delivering quality digital
        solutions. Our goal is to provide excellent service to our clients and */}
      </p>
      <div className="services-container">
        {serviceData.map((data) => (
          <ServiceCard key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Service;
