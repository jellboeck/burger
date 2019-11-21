
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        var hbsObject = { burgers: data }
        res.render("index" , hbsObject);
    });
});

router.post("/burgers/create", function (req, res){
    burger.create(["name"], [req.body.name], function(){
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function (req,res){
    var condition = "id = " + req.params.id;
    burger.update({ eaten: req.body.eaten}, condition ,function (){
        res.redirect("/burgers");
    });
});

module.exports = router;