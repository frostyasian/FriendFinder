var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/css", express.static(__dirname + "/app/public/css"));
app.use("/images", express.static(__dirname + "/app/public/images"));
app.use("/js", express.static(__dirname + "/app/public/js"));

require(path.join(__dirname, "/app/routing/apiRoutes"))(app);
require(path.join(__dirname, "/app/routing/htmlRoutes"))(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
