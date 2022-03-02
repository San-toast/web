const express = require("express");
const app = express();
const path = require("path");
let ejs = require("ejs");
const PORT = 3000;

const pictures = [
  "https://bit.ly/3HDJjTI",
  "https://bit.ly/3KsO6tl",
  "https://bit.ly/3Mdscfj",
  "https://bit.ly/3trBOu6",
  "https://bit.ly/3IEYOvY",
  "https://bit.ly/3C9vTOn",
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(`./public`));

app.get("/home", (req, res) => {
  res.render(`pages/home`, { picture: pictures });
});

app.get("/about", (req, res) => {
  res.render(`pages/about`, { picture: pictures });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
