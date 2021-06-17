const express = require("express");
const router = express.Router();
const Quote = require("../model/quotes");

router.get("/api", async (req, res) => {
  res.send(await Quote.find());
});

router.get("/api/random", async (req, res) => {
  res.send(
    await Quote.find()
      .limit(-1)
      .skip(Math.floor(Math.random() * ((await Quote.count()) - 1)))
      .then((v) => v[0])
  );
});

router.get("/api/:id", async (req, res) => {
  var id = req.params.id;
  res.send(await Quote.findById(id));
});

module.exports = router;
