var express = require("express");
app = express();
var request = require("request");


// Getting the results according to the query
app.get("/results", function (req, res) { 
    request("http://omdbapi.com/?s=harry&apikey=thewdb", function (error, response, body) { 
        if (!error && response.statusCode==200) {

            var results = JSON.parse(body);
            res.send(results["Search"][0]["Title"]);

        }
     });
 });


app.listen(3000, function () { 
    console.log("The movie app has started");
 });