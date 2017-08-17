var express = require("express");
var burgers = require("../models/burger.js");
var router = express.Router();


// Create all our routes and set up logic within those routes where required.
// Get route to grab all burgers from table
router.get("/", (req, result) => {
  burgers.all((data) => {
    var burgersDBInfo = {
      burgers: data
    };
    result.render("index", burgersDBInfo);
  });
});
// Post route to create a new burger
router.post("/", (req, result) => {
  console.log(req.body);
  burgers.create(req.body, () => {
    result.redirect("/");
  });
});
router.put("/:id/:bool", (req, result) => {
  let conditionObj = {
    id: req.params.id
  };
  if (req.params.bool === "0") {
    burgers.update({
      devoured: true
    }, conditionObj, () => {
      result.redirect("/");
    });
  } else {
    burgers.update({
      devoured: false
    }, conditionObj, () => {
      result.redirect("/");
    });
  }


});
router.delete("/:id", (req, result) => {
  burgers.delete({id: req.params.id}, () => {
    result.redirect("/");
  });
});
// Export routes for server.js to use.
module.exports = router;