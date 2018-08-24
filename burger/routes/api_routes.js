// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/burgers", function (req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }

    db.Burger.findAll({
      where: query,
      include: {model: db.Burger}
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  

  //   db.burger.findAll({
  //     where: query
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });


  app.get("/api/burgers/:id", function (req, res) {

    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbBurger) {
      console.log(dbBurger);
      res.json(dbBurger);
    });
  });

  app.post("/api/burgers", function (req, res) {
    db.Post.create(req.body).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });


  app.delete("/api/burgers/:id", function (req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });


  app.put("/api/burgers", function (req, res) {
    db.Burger.update(
      req.body, {
        where: {
          id: req.body.id
        }
      }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });
};