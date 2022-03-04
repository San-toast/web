const express = require("express");
const app = express();
const PORT = 3000;
const creds = require("./db");

app.use(express.json());

app.get("/get_toys", (req, res) => {
  creds.connect((err, client, release) => {
    client.query(`SELECT * FROM toys`, (err, result) => {
      if (err) {
        console.log("Error with your connection: ", err);
        res.send(err);
      }
      if (err) {
        res.status(400).send(err);
      }
      res.send(result.rows);
    });
  });
});

app.post("/create_toy", (req, res) => {
  console.log("create toys");
});

app.listen(PORT, console.log(`running on port ${PORT}`));
