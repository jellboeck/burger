var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var orm = require("./config/orm.js");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(process.cwd() + "public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(methodOverride("_method"));

var routes = require("./controllers/burgers_controller");
app.use("/", routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });