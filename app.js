const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb+srv://PushpendraPal:portPal0110@cluster0.5l6g0.mongodb.net/userPortfolioDB");

const userSchema = {
  name: String,
  email: String,
  message: String
};


const User = mongoose.model("User",userSchema);



app.get("/", function(req, res){

    res.render("landing")

});

app.get("/work", function(req, res){
res.render("work")
});

app.get("/about", function(req, res){
  res.render("about")
});

app.get("/contact", function(req, res){
res.render("contact")
});

app.post("/contact", function(req, res){

const user = new User({
  name: req.body.name,
  email: req.body.email,
  message: req.body.textarea
});

user.save((err)=>{
  if(err){
    console.log(err);
  }else{
    res.redirect("/")
  }
});

});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server started successfully");
});
