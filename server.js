var express = require("express");
// creating an express server
var app = express();

var PORT = process.env.PORT || 8083;
// var PORT = 8083;

// set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// link route files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// listener

app.listen(PORT, function(){
    console.log("APP listening on PORT: " + PORT);
})