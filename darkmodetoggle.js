$(function() {
  $("#toggle").click(function() {
    const isChecked = $("#switch").is(":checked");
    if (isChecked) {
      $("body").removeClass("night");
      $("nav").removeClass("bg-primary");
      $("nav").addClass("bg-dark");
    } else {
      $("body").addClass("night");
      $("nav").removeClass("bg-dark");
      $("nav").addClass("bg-primary");
    }
  });
});
