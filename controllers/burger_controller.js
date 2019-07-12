
// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});
// insert a burger
router.post('/', function(req, res) {
  burger.insertOne([
    'burger_name', 'devoured'
  ], [
    req.body.burger_name, req.body.devoured
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
// update one
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(data) {
    res.redirect('/');
  });
});



// Export routes for server.js to use.
module.exports = router;