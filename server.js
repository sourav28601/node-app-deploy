const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Node App Running on AWS EC2 !!!!!!!!!....................party toh bnti h bro");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});