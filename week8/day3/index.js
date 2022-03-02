const express = require("express");
const app = express();
const path = require("path");
let ejs = require("ejs");
const PORT = 3000;

const data = [
  {
    dogName: "dog",
    dogName: "woof",
  },
];
// middleware
//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// setup public folder
app.use(express.static(`./public`));

// Min requirements to show ejs rendering on a page
// let students = ["Santos", "Jason", "Rayleigh", "Ciara"];
// let html = ejs.render(`<h2><%= students.join(", "); %></h2>`, {
//   students: students,
// });

app.get("/", (req, res) => {
  res.render(`pages/home`);
});

app.get("/user_account", (req, res) => {
  res.render(`pages/userAccount`);
});

app.get("/dog", (req, res) => {
  res.render(`pages/dog`, { data: data });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
