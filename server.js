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


// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/form", function(req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/api/reservation", function(req, res) {
  var newRes = req.body;
  console.log(newRes);
  reservations.push(newRes);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
