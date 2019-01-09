const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(__dirname + "/View"));
app.use(express.static(__dirname + "/Script"));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
//sendFile takes absolute path

app.get("/page1", (req, res) => {
  res.sendFile(path.join(__dirname + "/page1.html"));
});

app.listen(3000);
console.log("Running at port 3000");
