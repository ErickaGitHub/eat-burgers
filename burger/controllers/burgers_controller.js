var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// get use res.render for handlebars // 

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// not sure if the create burger res is the only thing you need, the user only needs to add the burger they like  // 
router.post("/api/burger", function(req, res) {
  burger.create([
    "name", "burger"
  ], [
    req.body.name, req.body.burger
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // don't understand why this called condition or can I name it anything like flavor of burger // 
  console.log("condition", condition);


  // would a better name be eat in this situation instead of burger? // 
  burger.update({
    burger: req.body.burger
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

// selectAll()
// insertOne()
// updateOne()


