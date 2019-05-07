var usersData = require("../app/data/friends");

module.exports = function(app){
    // get request
    app.get("/api/users", function(req, res){
        res.json(usersData);
    });
    // post request, handle user submits and push them into array
    app.post("/api/users", function(req, res){
        usersData.push(req.body);
        res.json(usersData);
    })
   
}