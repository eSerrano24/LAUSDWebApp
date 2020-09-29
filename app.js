const express = require("express");
const xlsx = require("xlsx");

const app = express();

let workBook = xlsx.readFile("LAUSDschoolCodes.xlms");

//console log when app is running on server 3000
app.listen(3000, function () {
  console.log("server started on port 3000");
});
// sends html file to display
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
