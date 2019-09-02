function validate(question) {
  var question = document.forms["survey"][question].value;
  if (question === "Select an Option" || question === "") {
    alert("Please fill out all the fields before submitting!");
    return false;
  }
  return true;
}

function validateForm() {
  if (validate("name")) {
    if (validate("photo")) {
      for (var i = 1; i < 11; i++) {
        if (validate("q" + i)) {
          continue;
        } else {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}

$("#submit-btn").on("click", function(event) {
  event.preventDefault();
  if (validateForm()) {
    var person = {
      name: $("#name")
        .val()
        .trim(),
      photo: $("#photo")
        .val()
        .trim(),
      scores: [
        $("#q1")
          .val()
          .trim(),
        $("#q2")
          .val()
          .trim(),
        $("#q3")
          .val()
          .trim(),
        $("#q4")
          .val()
          .trim(),
        $("#q5")
          .val()
          .trim(),
        $("#q6")
          .val()
          .trim(),
        $("#q7")
          .val()
          .trim(),
        $("#q8")
          .val()
          .trim(),
        $("#q9")
          .val()
          .trim(),
        $("#q10")
          .val()
          .trim()
      ]
    };

    $.post("/api/friends", person).then(function(data) {
      $("#best-match-name").text(data.name);
      $("#best-match-photo").attr("src", data.photo);
      $("#best-match-modal").modal("toggle");
    });
  }
});

$("#restart-btn").on("click", function() {
  $("html").scrollTop(0);
  window.location.reload();
});
