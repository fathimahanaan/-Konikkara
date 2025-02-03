import React from "react";
import "../pages/About.css";
import { handleEnquiryFormClick } from "../utils/whatsapp";

const About = () => {
  return (
    <section id="About" className="about-section">
      <div className="container">
        {/* Text Section */}
        <div className="text-container">
          <h3>About</h3>
          <h2> Konikkara Jewellery LLC </h2>

          <p>
            Konikkara Jewellery LLC specializes in manufacturing and exporting
            exquisite Kerala traditional jewellery. Based in the cultural
            capital of Kerala, our designs embody the artistic heritage and
            royal legacies of the region. Renowned for intricate craftsmanship,
            our 22K jewellery features deities, divine motifs, and floral
            designs that reflect the richness of Indian culture.
          </p>
          <button onClick={handleEnquiryFormClick}>Learn More</button>
        </div>

        {/* Image Section */}
        <div className="image-container">
          <img src="gold.png" alt="About Us" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
