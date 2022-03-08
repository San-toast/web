require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const db = require("./models");
app.use(express.json());
const PORT = 3000;

app.get("/get_users", async (req, res) => {
  let users = await db.User.findAll();
  res.send(users);
});

app.get("/get_owners", async (req, res) => {
  let owners = await db.owners.findAll();
  res.send(owners);
});

app.get("/get_pets", async (req, res) => {
  let pets = await db.pets.findAll();
  res.send(pets);
});

app.post("/make_owner", async (req, res) => {
  const saltRounds = 2;

  const name = req.body.name;
  const password = req.body.password;
  const location = req.body.location;
  const environment = req.body.environment;

  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPw = await bcrypt.hash(password, salt);
  const ownerMaker = await db.owners.create({
    name: name,
    password: hashedPw,
    location: location,
    environment: environment,
  });
  res.send(ownerMaker);
});

app.post("/make_pet", async (req, res) => {
  const type = req.body.type;
  const species = req.body.species;
  const name = req.body.name;
  const age = req.body.age;
  const ownerId = req.body.ownerId;

  const petMaker = await db.pets.create({
    type: type,
    species: species,
    name: name,
    age: age,
    ownerId: ownerId,
  });
  res.send(petMaker);
});

app.post("/make_bcrypt_user", async (req, res) => {
  const saltRounds = 2;
  const name = req.body.name;
  const password = req.body.password;
  // this is encrypting the password with a hash
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPw = await bcrypt.hash(password, salt);
  // Store hash in your password DB.
  const bcryptUser = await db.Bcrypt.create({
    name: name,
    password: hashedPw,
  });
  res.send(bcryptUser);
});

app.post("/login_bcrypt", async (req, res) => {
  const password = req.body.password;
  const findUser = await db.Bcrypt.findAll({
    where: {
      name: req.body.name,
    },
  });
  const hash = findUser[0].dataValues.password;
  const comparePassword = await bcrypt.compare(password, hash);

  if (comparePassword) {
    res
      .status(200)
      .send(
        `That is a valid user, you are logged in as ${findUser[0].dataValues.name}`
      );
  } else {
    res.status(400).send("Ru roh, something is wrong with those credentials");
  }
});
app.listen(PORT, console.log(`Listening on port ${PORT}`));
