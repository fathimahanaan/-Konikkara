// useGoldPrice.js
import { useState, useEffect } from "react";
import axios from "axios";

const useGoldPrice = () => {
  const [loading, setLoading] = useState(false);
  const [priceData, setPriceData] = useState(null);
  const [error, setError] = useState(null);

  const getPrice = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://www.goldapi.io/api/XAU/AED", {
        headers: { "x-access-token": "goldapi-1646kcsm6klzoi3-io" },
      });
      setPriceData(response.data);
      console.log(response.data);
    } catch (error) {
      setError("Unable to fetch the gold prices. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPrice();
  }, []);

  return { loading, priceData, error };
};

export default useGoldPrice;
