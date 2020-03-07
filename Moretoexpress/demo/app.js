var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.render("home.ejs");
    res.send("<h1>Welcome to the home page, nigguhs!</h1>");
});

app.get("/fallinlovewith/:thing", function (req, res) {  
    var thing = req.params.thing;
    res.render("love.ejs", {ThingVar:thing});
});

app.get("/posts", function (req, res) { 
    var posts = [
        {Title:"Post 1", Author:"Susy"},
        {Title:"Post 2", Author:"Mehul"},
        {Title:"Post 1", Author:"Chirag"}
    ]; 
    res.render("posts.ejs");
});

app.listen(3000, function(){
    console.log("App works very very fine!!!");
});