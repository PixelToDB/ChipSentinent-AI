require("dotenv").config();
const express = require("express");
const cors = require("cors");

const analyzeRoutes = require("./routes/analyzeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", analyzeRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;