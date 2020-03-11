var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var app = express();
var request = require("request");

mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created:{type:Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title:"girl",
//     image:"https://images.unsplash.com/photo-1583778477928-531a25a0baf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     body:"Girl"
// });


app.get("/", function (req, res) { 
    res.render("index");
 });


app.listen(3000,function () {
    console.log("SERVER IS RUNNING");
});