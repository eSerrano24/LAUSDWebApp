const express = require("express");
const xlsx = require("xlsx");

const app = express();

let workBook = xlsx.readFile("LAUSDschoolCodes.xlsx");

let ws = workBook.Sheets["Sheet1"];

let data = xlsx.utils.sheet_to_json(ws);

/*let newData = data.map(function (record) {
  let schoolName = record.School;
  return schoolName;
});*/

console.log(data);

//console.log(workBook.SheetNames);

//console log when app is running on server 3000
app.listen(3000, function () {
  console.log("server started on port 3000");
});
// sends html file to display
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
//include style.css
app.use(express.static(__dirname + "/public"));
