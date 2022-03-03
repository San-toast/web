const express = require("express");
const app = express();
const creds = require("./db");
app.use(express.json());

const PORT = 3000;

app.get("/getDogs", (req, res) => {
  // establish the connection to the database
  // using the credentials we made in db.js
  creds.connect((err, client, release) => {
    // inside of the connection, we can now query our database
    // using the built in function on the client variable
    // called 'query'
    // We can write plain sql in this section
    client.query("SELECT * FROM dogs", (err, result) => {
      res.send(result.rows);
    });
  });
});

app.post("/makeDog", (req, res) => {
  console.log(req.body);
  creds.connect((err, client, release) => {
    if (err) {
      res.send(err);
    }
    client.query(
      `INSERT INTO dogs (name, breed) VALUES ( '${req.body.name}', '${req.body.breed}')`,
      (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
        res.send(result);
      }
    );
  });
});

app.listen(PORT, console.log(`on port ${PORT}`));
