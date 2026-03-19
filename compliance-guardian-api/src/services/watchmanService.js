const axios = require("axios");
const { WATCHMAN_URL } = require("../config");

exports.callWatchman = async (news) => {
  const res = await axios.post(
    WATCHMAN_URL,
    {
      userInput: news,
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
    return raw;
  }
};