// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  (DATA)
// =============================================================

var reservations = [
  {
    name: "Yoda",
    phone: "777",
    email: "Jedi-Master@jedi.com",
    id: 9,
  },
  {
    name: "Mace Windu",
    phone: "555-Holla",
    email: "Jedi-Mastah@jedi.com",
    id: 1,
  },
  {
    name: "Obi-Wan",
    phone: "867-5309",
    email: "irony@jedi.com",
    id: 00,
  },
  {
    name: "General Grevious",
    phone: "444-4444",
    email: "Jedi-killer@jedi.com",
    id: 4,
  }];

// 

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/form", function (req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.post("/api/reservation", function (req, res) {
  console.log(req.body);
  var newRes = req.body;
  newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
  console.log(newRes);
  reservations.push(newRes);
  res.json(newRes);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
