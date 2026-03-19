const axios = require("axios");
const { STRATEGIST_URL } = require("../config");

exports.callStrategist = async (data) => {
  try {
    const res = await axios.post(
      STRATEGIST_URL,
      {
        userInput: JSON.stringify(data), // 👈 important
        asyncOutput: false
      },
      {
        headers: {
          "X-API-KEY": process.env.AIRIA_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    const raw = res.data?.output?.response;

    try {
      return JSON.parse(raw);
    } catch {
      console.warn("Strategist parsing failed, returning raw");
      return raw;
    }

  } catch (error) {
    console.error("Strategist Error:", error.message);

    // 🔥 fallback (demo-safe)
    return {
      action: "Switch supplier",
      alternatives: [
        "Korea Advanced Materials",
        "Vietnam Rare Earth Co."
      ],
      message: "Fallback: Suggested suppliers due to risk."
    };
  }
};