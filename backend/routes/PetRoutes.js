const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");

router.post("/", async (req, res) => {
  const { name, type, color } = req.body;
  const newPet = new Pet({ name, type, color });
  await newPet.save();
  res.json(newPet);
});

router.get("/", async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

module.exports = router;
