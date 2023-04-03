//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));


function example() {
  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 4; // reassigns the value of a
    let b = 5; // declares a new variable b with block-level scope
    const c = 6; // declares a new constant c with block-level scope
  }

  console.log(a); // outputs 4
  console.log(b); // outputs 2
  console.log(c); // outputs 3
}

example();

app.get("/", function(req, res){
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at 12345654 or kabornblack@gmail.com, email is fine if you need anything else");
});

app.get("/about", function(req, res){
  res.send("My name is Shaibu Kabiru, from Nigeri and i am here in Estonia atm");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>code</li></ul>")
});

app.get("/love", function(req, res){
  res.send("What is love or what we do for love")
});

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
