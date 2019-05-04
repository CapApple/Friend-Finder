var express = require("express");
// creating an express server
var app = express();

// var PORT = process.env.PORT
var PORT = 8081;

// set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// link route files
require("./routing/apiRoutes")(app);
require("/routing/htmlRouts")(app);

