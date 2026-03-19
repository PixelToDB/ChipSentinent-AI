const { callWatchman } = require("../services/watchmanService");
const { callAuditor } = require("../services/auditorService");
const { callStrategist } = require("../services/strategistService");
const { logStep } = require("../utils/logger");

exports.analyze = async (req, res) => {
  const startTime = Date.now();

  try {
    const { news } = req.body;

    if (!news) {
      return res.status(400).json({ error: "News input required" });
    }

    // 1. Watchman
    const watchmanOutput = await callWatchman(news);
    logStep("WATCHMAN", watchmanOutput);

    if (!watchmanOutput) {
      return res.json({ message: "No restriction detected" });
    }

    // 2. Auditor
    const auditorOutput = await callAuditor(watchmanOutput);
    logStep("AUDITOR", auditorOutput);

    // 3. Strategist
    const strategistOutput = await callStrategist(auditorOutput);
    logStep("STRATEGIST", strategistOutput);

    const totalTime = Date.now() - startTime;

    res.json({
      alert: watchmanOutput,
      risk: auditorOutput,
      decision: strategistOutput,
      meta: { time_ms: totalTime }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Processing failed" });
  }
};