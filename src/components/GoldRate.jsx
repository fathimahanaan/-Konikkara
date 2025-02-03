import React, { useEffect, useState } from "react";
import "../pages/GoldRate.css";
// Import the custom hook
import LoadingSpinner from "./LoadingSpinner"; // Import your loading spinner component

const GoldRate = () => {
  const [priceData, setPriceData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoldRate = async () => {
      try {
        const response = await fetch("/.netlify/functions/fetchGoldRate");
        const data = response.json();
        setPriceData(data.goldRate);
        console.log(data);
      } catch (err) {
        console.error("Error:", err);
        setError("Unable to load data.");
      }
    };

    fetchGoldRate();
  }, []);

  return (
    <div className="Gold-outer-container">
      {" "}
      <h4 className="gold-rate-heading">Gold Rate</h4>
      <div className="Gold-inner-container">
        <div className="Gold-card-1"></div>
        <div className="Gold-card-2">
          <h4 className="h4-gold">Today's Gold Price (in AED)</h4>
          <div className="price-container">
            <p>
              <strong>Gold Price (1 oz):</strong> {priceData?.price} AED
            </p>
            <p>
              <strong>Ask Price:</strong> {priceData?.ask} AED
            </p>
            <p>
              <strong>Bid Price:</strong> {priceData?.bid} AED
            </p>
            <p>
              <strong>Change (24h):</strong> {priceData?.ch} AED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldRate;
