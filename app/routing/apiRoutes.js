var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var total = [];
    for (var i = 0; i < friends.length; i++) {
      var score = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        score += friends[i].scores[j] - req.body.scores[j];
      }
      total.push(Math.abs(score));
    }
    var match = total.indexOf(Math.min(...total));
    res.json(friends[match]);
  });
};
