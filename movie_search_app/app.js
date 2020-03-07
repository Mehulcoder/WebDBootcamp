var express = require("express");
app = express();
var request = require("request");
app.set("view engine", "ejs");

//The search bar that will route to the /results page
app.get("/", function(req, res) {
    res.render("search");
});

// Getting the results according to the query
app.get("/results", function (req, res) { 
    var query = req.query.search;
    var url = "http://omdbapi.com/?s="+query+"&apikey=thewdb";

    request(url, function (error, response, body) { 
        if (!error && response.statusCode==200) {
            // console.log(req.params);
            var data = JSON.parse(body);
            res.render("results", {data:data});

        }
     });
 });


app.listen(3000, function () { 
    console.log("The movie app has started");
 });