var cowsay = require("cowsay");

console.log(cowsay.say({ text: "I'm a mooodule" }));
const cow1 = cowsay.say({ text: "Setting up cow appointment" });
const cow2 = cowsay.say({ text: "Adding cow user" });

const express = require("express");
const app = express();
const PORT = 3002;

app.post("/sendCowUserName", (req, res) => {
  res.send(cow1);
});

app.post("/sendCowAppointment", (req, res) => {
  res.send(cow2);
});

app.get("/getCowUserName", (req, res) => {
  res.send(cow1);
});

app.get("/getCowAppointment", (req, res) => {
  res.send(cow2);
});

app.delete("/deleteCowUser", (req, res) => {
  res.send("deleting cow :(");
});

app.listen(PORT, console.log(`Listening on port http://localhost:${PORT}`));
