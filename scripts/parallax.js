$(document).on("scroll", () => {
  let pixelsFromTop = $(document).scrollTop();

  $(".progress .counter").text("Pixels Down: " + pixelsFromTop);

  (pixelsFromTop > 50) ? $("header").addClass("hidden") : $("header").removeClass("hidden");
  
  if(pixelsFromTop < 600) {
    $("body").css("background-color", "#fff");
  } else if(pixelsFromTop < 1400) {
    $("body").css("background-color", "#a29c97");
  } else if(pixelsFromTop < 2200) {
    $("body").css("background-color", "#d9dfe4");
  } else if(pixelsFromTop < 3000) {
    $("body").css("background-color", "#fff0f0");
  } else {
    $("body").css("background-color", "#cdccc7");
  }

});