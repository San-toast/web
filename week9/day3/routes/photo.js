const express = require("express");
const router = express.Router();
const db = require("../models");

// Create Photos
router.post("/create", async (req, res) => {
  const photoMaker = await db.Photo.create({
    title: req.body.title,
    url: req.body.url,
    userId: req.body.userId,
  });
  res.send(photoMaker);
});

// Read Photos
router.get("/get", async (req, res) => {
  let getPhotos = await db.Photo.findAll();
  res.send(getPhotos);
});

// Update Photos
router.post("/update/:id", async (req, res) => {
  let { id } = req.params;
  let updatePhoto = await db.Photo.update(
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
router.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const photoToDelete = await db.Photo.destroy({ where: { id: id } });
  res.send(`Deleted photo with id of ${id}`);
});
module.exports = router;
