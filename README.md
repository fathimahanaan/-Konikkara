# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// GoldRate.js
import React from "react";
import "../pages/GoldRate.css";
import useGoldPrice from "../hooks/useGoldPrice"; // Import the custom hook
import LoadingSpinner from "./LoadingSpinner"; // Import your loading spinner component

const GoldRate = () => {
const { loading, priceData, error } = useGoldPrice(); // Use the hook

// Handle loading state
if (loading) {
return <LoadingSpinner />;
}

// Handle error state
if (error) {
return <p>{error}</p>;
}

return (

<div className="Gold-outer-container">
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

//other code:
import React, { useEffect, useState } from "react";
import "../pages/GoldRate.css";
import axios from "axios";

const GoldRate = () => {
const [loading, setLoading] = useState(false);
const [priceData, setPriceData] = useState(null);
async function getPrice() {
setLoading(true);
try {
const response = await axios.get(`https://www.goldapi.io/api/XAU/AED`, {
headers: { "x-access-token": "goldapi-1646kcsm6klzoi3-io" },
});
const data = response.data;
console.log(data);
setPriceData(data);
} catch (error) {
console.log(error);
} finally {
setLoading(false);
}
}

useEffect(() => {
getPrice();
}, []);
return loading ? (

<p> loading...</p>
) : (
<div className="Gold-outer-container">
<div className="Gold-inner-container">
<div className="Gold-card-1"></div>
<div className="Gold-card-2">
<h4 className="h4-gold">Todays gold price:</h4>
<div className="price-container">
<p>gold rate is {priceData?.price}</p>
<p>todays hhcbvxvxcv</p>
<h4 className="h4-gold">Todays gold price:</h4>
<p>cgcghfghfghfgh</p>
<p>hcghcgdvcxbcvnb</p>
</div>
</div>
</div>
</div>
);
};

export default GoldRate;
