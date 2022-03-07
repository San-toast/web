require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const PORT = 3000;
app.get("/get_users", async (req, res) => {
  let users = await db.User.findAll();
  res.send(users);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
