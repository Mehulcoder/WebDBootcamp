var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
// Use bodyparser(remember the code)
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {  
    res.render("home");
});

// Making it global so that others can use it too//We'll use database later to make it easier
//As this will get lost once we restart the server
var friends = ["Jay", "Anushk", "Chirag", "Devaishi", "Sankalp", "Bhoomit", "Saish"]; 

app.post("/addfriend", function (req, res) {  
    console.log(req.body);
    friends.push(req.body.newfriend);
    res.redirect("/friends");
});

app.get("/friends", function (req, res) {
    res.render("friends", {friends:friends});
});

app.listen(3000, function () {  
    console.log("App works very very fine!!!");
});