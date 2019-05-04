var usersData = requrie("../app/data/friends");

module.exports = function(app){
    // get request
    app.get("/api/friends", function(req, res){
        res.json(usersData);
    });
    // post request, handle user submits and push them into array
    app.post("/api/friends", function(req, res){
        usersData.push(req.body);
    })
   
}