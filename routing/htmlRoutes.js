var path = require("path");

module.exports = function(app){
    // GET Requests

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survery.html"));
    })

    // default to home
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}