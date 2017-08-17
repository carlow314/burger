var orm = require("../config/orm.js");
var burgers = {
  all: (cb)=> {
    orm.all("burgers",(result)=> {
      cb(result);
    });
  },
  // The variables cols and vals are arrays.
  create: (req, cb)=> {
    orm.create("burgers", req, (result)=> {
      cb(result);
    });
  },
  update: (objColVals, condition, cb)=> {
    orm.update("burgers", objColVals, condition, (result)=> {
      cb(result);
    });
  },
  delete: ( req, cb)=> {
    orm.delete("burgers", req, (result)=> {
      cb(result);
    });
  },
};
// Export the database functions for the controller (burgers_controllers.js).
module.exports = burgers;