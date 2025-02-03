const axios = require("axios");

exports.handler = async (event, context) => {
  const response = await axios.get(`https://www.goldapi.io/api/XAU/AED`, {
    headers: { "x-access-token": "goldapi-1646kcsm6kmgxy8-io" },
  });
  try {
    const response = await axios.get(API_URL); // Using Axios to fetch data
    const goldRate = response.data.rates.XAU;

    return {
      statusCode: 200,
      body: JSON.stringify({ goldRate, timestamp: new Date() }),
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch gold rate" }),
    };
  }
};
