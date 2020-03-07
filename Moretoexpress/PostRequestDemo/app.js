var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {  
    res.render("home");
});

app.get("/friends", function (req, res) {
    var friends = ["Jay", "Anushk", "Chirag", "Devaishi", "Sankalp", "Bhoomit", "Saish"]; 
    res.render("friends", {friends:friends});
});

app.post("/addfriend", function (req, res) {  
    res.send("You have reached the post request");
});

app.listen(3000, function () {  
    console.log("App works very very fine!!!");
});