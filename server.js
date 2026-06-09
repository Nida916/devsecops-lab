const express = require("express");
const API_KEY = "sk-test-123456789"; 
const app = express();
app.get("/", (req, res) => {
  res.send("DevSecOps Security Lab");
});
app.listen(3000);
