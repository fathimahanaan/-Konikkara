import React from "react";
import "../pages/Collection.css";
import { handleEnquiryFormClick } from "../utils/whatsapp";

const Collection = () => {
  return (
    <section id="Collection">
      <div className="outer-container">
        <div className="collection-container">
          <div className="collection-text">
            <h4>Our Collections</h4>
            <p>
              Our jewelry is crafted with precision using only the finest
              materials, ensuring lasting durability and beauty
            </p>
            <button
              onClick={handleEnquiryFormClick}
              className="collection-button"
            >
              See More
            </button>
          </div>
          <div className="collection-image">
            <img src="public/naga.webp" className="image" />
            <img src="necklace-2.webp" className="image" />
            <img src="palakka.jpg" className="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
