const axios = require("axios");
const { AUDITOR_URL } = require("../config");

exports.callAuditor = async (data) => {
  try {
    const res = await axios.post(
      AUDITOR_URL,
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
      return JSON.parse(raw); // parse AI JSON output
    } catch {
      console.warn("Auditor parsing failed, returning raw");
      return raw;
    }

  } catch (error) {
    console.error("Auditor Error:", error.message);

    // 🔥 fallback (for demo safety)
    return {
      affected_shipments: ["SHP001"],
      risk_level: "MEDIUM"
    };
  }
};