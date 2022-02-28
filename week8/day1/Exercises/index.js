// console.log("Hello world, I am Node");

const express = require("express");
const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, console.log(`Listening on port http://localhost:${PORT}`));
