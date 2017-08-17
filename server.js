//Node Modules
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//Setting up Express
PORT = process.env.PORT || 8000;
var app =express();

//allow server access to static files
app.use(express.static("public/"));
//override for PUT/DELETE methods
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//listen for server connection

var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);


app.listen(PORT,() =>{
    console.log("live on port " + PORT);
});
    