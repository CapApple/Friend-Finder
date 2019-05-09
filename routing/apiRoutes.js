var usersData = require("../app/data/friends");

module.exports = function(app){
    // get request
    app.get("/api/users", function(req, res){
        res.json(usersData);
    });
    // post request, handle user submits and push them into array
    app.post("/api/users", function(req, res){
        // This is interesting! I should write this in my blog!
        req.body.scores = req.body.scores.map(function(item){
            return parseInt(item);
        });
        
        usersData.push(req.body);
        console.log(req.body);
        res.json(usersData);
    })
   
}