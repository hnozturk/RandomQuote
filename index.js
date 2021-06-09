const express = require("express");
const cors = require("cors");
const router = require("./router/router");
var path = require("path");

const app = express();

app.use(cors());

app.use("/", router);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Connected");
});
