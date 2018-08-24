

var path = require("path");


module.exports = function(app) {


  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/burger.html"));
  });

  // need to create a html page for burger // 


  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/burger.html"));
  });
};