var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bosyParser = require("body-parser"),
    localStartegy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    User = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app");

app.set("view engine", "ejs");

// Always required to add for using passport
app.use(require("express-session")({
    secret:"Rusty is the best ever dog",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) { 
    res.render("home");
 });

 app.get("/secret", function (req, res) { 
    res.render("secret");
 });

 app.listen(3000, function(){
    console.log("Server is Running");
 });