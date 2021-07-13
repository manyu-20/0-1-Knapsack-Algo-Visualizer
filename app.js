//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//todo

app.get("/",function(req,res){
  // console.log(__dirname + "\\index.html");
  // res.render(__dirname + "\\index.html");
  res.render("home");
})

app.post("/",function(req,res){
  console.log(req.body);
  let weight = req.body.weightArray;
  let price = req.body.profitArray;
  let weightSol = req.body.weightArray.split(" ");
  res.render("homeAfter",{size:req.body.size,weights:weight,prices:price,total:req.body.Weight,wsol:weightSol});
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
