require("dotenv").config();
const express = require("express");
const API_KEY = process.env.API_KEY;
const app = express();
app.get("/", (req, res) => {
  res.send("DevSecOps Security Lab");
});
app.listen(3000, () => {
  console.log("Server Running");
});
