var connection = require("./connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  create: function () {
    var queryString = "";
    connection.query(queryString, [], function (err, result) {

    })
  },

  update: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString = queryString + " SET ";
    queryString = queryString + objToSql(objColVals);
    queryString = queryString + " WHERE ";
    queryString = queryString + condition;

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    })


  }};

module.exports = orm;
