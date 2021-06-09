const express = require("express");
const router = express.Router();

const quotes = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer",
  },
];

router.get("/api", (req, res) => {
  res.send(quotes);
});

router.get("/api/:id", (req, res) => {
  var id = req.params.id;
  res.send(quotes[id]);
});

module.exports = router;
