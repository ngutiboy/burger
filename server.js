// // Pull in dependencies
// var express = require("express");
// var bodyParser = require('body-parser');
// var methodOveride = require('method-overide')


// var PORT = process.env.PORT || 8080;

// var app = express();

// // // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));




// // // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burger_controller.js");

// app.use(routes);

// // // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });








var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// var port = 8080;
var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// app.listen(port);



