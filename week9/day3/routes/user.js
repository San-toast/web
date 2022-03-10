const express = require("express");
const router = express.Router();
const db = require("../models");

// router.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

//Create User
router.post("/create", async (req, res) => {
  const userMaker = await db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  res.send(userMaker);
});

// Read Users
router.get("/get", async (req, res) => {
  let getUsers = await db.User.findAll();
  res.send(getUsers);
});

// Update User
router.post("/update/:id", async (req, res) => {
  let { id } = req.params;
  let updateUser = await db.User.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    },
    { where: { id: id } }
  );

  res.send(`Updated user with id of ${id}`);
});

// Delete User
router.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const userToDelete = await db.User.destroy({ where: { id: id } });
  res.send(`Deleted user with id of ${id}`);
});
module.exports = router;
