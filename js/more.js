$(document).ready(function () {
  $("#button").click(function () {
    if (
      $("#name").val() != "" &&
      $("#phone").val() != "" &&
      $("#subject").val() != ""
    ) {
      alert("Thanks for your suggestion!");
    } else if ($("#name").val() == "") {
      alert("Please fill in your name!");
    } else if ($("#phone").val() == "") {
      alert("Please fill in your number!");
    } else if ($("#subject").val() == "") {
      alert("Pleasea fill in your message!");
    }
  });
});
