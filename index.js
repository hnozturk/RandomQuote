const express = require("express");
const cors = require("cors");
var path = require("path");

const app = express();

app.use(cors());

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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api", (req, res) => {
  res.send(quotes);
});

app.get("/api/:id", (req, res) => {
  var id = req.params.id;
  console.log(id);
  res.send(quotes[id]);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Connected");
});
