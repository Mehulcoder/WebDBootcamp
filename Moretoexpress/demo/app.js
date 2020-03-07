var express = require("express");
var app = express();

// Tell our code that the css file and JS file will be included in the public folder
app.use(express.static("public"));
//This will eliminate the need to use .ejs everytime
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
    res.send("<h1>Welcome to the home page, nigguhs!</h1>");
});

app.get("/fallinlovewith/:thing", function (req, res) {  
    var thing = req.params.thing;
    res.render("love", {ThingVar:thing});
});

app.get("/posts", function (req, res) { 
    var posts = [
        {Title:"Post 1", Author:"Susy"},
        {Title:"Post 2", Author:"Mehul"},
        {Title:"Post 3", Author:"Chirag"}
    ]; 
    res.render("posts.ejs", {posts:posts});
});

app.listen(3000, function(){
    console.log("App works very very fine!!!");
});