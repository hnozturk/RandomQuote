require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/router");
var path = require("path");

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(process.env.PORT || 3333, () => {
    console.log("Connected");
  });
});

app.use(cors());

app.use("/", router);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
