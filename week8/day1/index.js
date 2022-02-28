const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/user_data", (req, res) => {
  res.send("posting user data");
});

app.listen(PORT, console.log(`Listening on port http://localhost:${PORT}`));
