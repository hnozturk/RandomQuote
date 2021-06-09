const express = require("express");
const cors = require("cors");
var path = require("path");

const app = express();

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api", (req, res) => {
  res.send({ message: "hello" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Connected");
});
