var express = require("express");
app = express();
var request = require("request");
app.set("view engine", "ejs");

// Getting the results according to the query
app.get("/results", function (req, res) { 
    request("http://omdbapi.com/?s=dark&apikey=thewdb", function (error, response, body) { 
        if (!error && response.statusCode==200) {

            var data = JSON.parse(body);
            res.render("results", {data:data});

        }
     });
 });


app.listen(3000, function () { 
    console.log("The movie app has started");
 });