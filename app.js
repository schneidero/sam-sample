require("dotenv").config();
var express = require("express");
var app = express();
var name = process.env.PERSON_NAME;
app.get("/", function (req, res) {
  console.log(`Hello ${name}!`);
  res.send(`Hello ${name}!`);
});
app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
