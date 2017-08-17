var connection = require("./connection");
var orm = {
  all: (table, callback) => {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  create: (table, insertObj, callback) => {
    var queryString = "INSERT INTO " + table + " SET ?";
    connection.query(queryString, [insertObj], (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  update: (table, objColVals, condition, callback) => {
    var queryString = "UPDATE " + table + " SET ? WHERE ?";
    connection.query(queryString, [objColVals, condition], (err, result) => {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  delete: (table, condition, cb) => {
    var queryString = "DELETE FROM " + table + " WHERE ?";
    connection.query(queryString, [condition], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
// Export the orm object for the model (burgers.js).
module.exports = orm;