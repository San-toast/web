const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

let exerciseDb = [
  { name: "Luke" },
  { name: "Ahsoka" },
  { name: "Han" },
  { name: "Tiana" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/cats", (req, res) => {
  res.send("Meow");
});

app.get("/dogs", (req, res) => {
  res.send("Woof");
});

app.get("/cats_and_dogs", (req, res) => {
  res.send("Dogs and cats living together...mass hysteria!!");
});

// app.get(`/greet/:name`, (req, res) => {
//   const { name } = req.params;
//   res.send(`Hello, ${name}!`);
// });

app.get(`/greet/:name`, (req, res) => {
  const { name } = req.params;
  let greeting = `<h1>Hello, ${name}</h1>`;

  res.send(greeting);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
