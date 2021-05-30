$(document).on("scroll", () => {
  let pixelsFromTop = $(document).scrollTop();

  $(".progress .counter").text("Pixels Down: " + pixelsFromTop);

  (pixelsFromTop > 50) ? $("header").addClass("hidden") : $("header").removeClass("hidden");
});