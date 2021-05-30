$(document).on("scroll", () => {
  let pixels = $(document).scrollTop();

  $(".progress .counter").text("Pixels Down: " + pixels);
});