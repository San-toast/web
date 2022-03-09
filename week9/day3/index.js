const express = require("express");
const { parse } = require("pg-protocol");
const app = express();
const db = require("./models");
const { Photo, User } = db;
app.use(express.json());
const PORT = 3000;

// CRUD Photo

// Create Photos
app.post("/create_photo", async (req, res) => {
  const photoMaker = await db.Photo.create({
    title: req.body.title,
    url: req.body.url,
    userId: req.body.userId,
  });
  res.send(photoMaker);
});

// Read Photos
app.get("/get_photos", async (req, res) => {
  let getPhotos = await db.Photo.findAll();
  res.send(getPhotos);
});

// Update Photos
app.post("/update_photo/:id", async (req, res) => {
  let { id } = req.params;
  let updatePhoto = await Photo.update(
    {
      title: req.body.title,
      url: req.body.url,
      userId: req.body.userId,
    },
    { where: { id: id } }
  );

  res.send(`Updated photo with id of ${id}`);
});

// Delete Photos
app.delete("/delete_photo/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const photoToDelete = await db.Photo.destroy({ where: { id: id } });
  res.send(`Deleted photo with id of ${id}`);
});
// CRUD User

//Create User
app.post("/create_user", async (req, res) => {
  const userMaker = await db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  res.send(userMaker);
});

// Read Users
app.get("/get_users", async (req, res) => {
  let getUsers = await db.User.findAll();
  res.send(getUsers);
});

// Update User
app.post("/update_user/:id", async (req, res) => {
  let { id } = req.params;
  let updateUser = await User.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    },
    { where: { id: id } }
  );

  res.send(`Updated user with id of ${id}`);
});

// Delte User
app.delete("/delete_user/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const userToDelete = await db.User.destroy({ where: { id: id } });
  res.send(`Deleted user with id of ${id}`);
});

app.listen(PORT, console.log(`Listening on ${PORT}`));
