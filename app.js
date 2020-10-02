const express = require("express");
const xlsx = require("xlsx");
const bodyParser = require("body-parser");

const app = express();

let workBook = xlsx.readFile("LAUSDschoolCodes.xlsx");

let ws = workBook.Sheets["Sheet1"];

let data = xlsx.utils.sheet_to_json(ws);

//get user input from html
app.use(bodyParser.urlencoded({ extended: true }));
//let input = document.getElementById("userInput").value;

//console.log(data.length);
//loop through array and check if school name is in array of objects
// for (let i = 0; i < data.length; i++) {
//   if (data[i].School) {
//     console.log(data[i]);
//   }
// }

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

//filter through school list
let filterSchools = data.filter((schoolName) =>
  schoolName.School.includes("San")
);

console.log(filterSchools);

//console.log(filterSchools(data, "San"));
