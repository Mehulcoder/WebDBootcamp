var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.render("home.ejs");
    res.send("<h1>Welcome to the home page, nigguhs!</h1>");
});

app.get("/fallinlovewith/:thing", function (req, res) {  
    var thing = req.params.thing;

    res.send("You fell in love with "+thing);
});

app.listen(3000, function(){
    console.log("App works very very fine!!!");
});