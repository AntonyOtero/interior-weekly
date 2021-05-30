
$(document).on("scroll", () => {
  let pixelsFromTop = $(document).scrollTop();
  let scrollHeight = $(document).height() - $(window).height();
  let percentScrolled = 100 * (pixelsFromTop / scrollHeight);
  
  let imageHeight = $("section img:first-of-type").height();
  let imagePadding = [...$("section:first-of-type").css("padding-top")].splice(0,2).join("");
  let transitionZone = imageHeight + imagePadding * 2
  
  function getTransitionPoint(imageNum) {
    return (imageHeight * imageNum) + (imagePadding * 2);
  }
  
  $(".progress-bar").css("width", percentScrolled + "%");
  $(".progress-counter").text("Pixels Down: " + pixelsFromTop);

  (pixelsFromTop > 50) ? $("header").addClass("hidden") : $("header").removeClass("hidden");
  
  if(pixelsFromTop < imageHeight) {
    $("body").css("background-color", "#fff");
  } else if(pixelsFromTop < getTransitionPoint(2)) {
    $("body").css("background-color", "#a29c97");
  } else if(pixelsFromTop < getTransitionPoint(3)) {
    $("body").css("background-color", "#d9dfe4");
  } else if(pixelsFromTop < getTransitionPoint(4)) {
    $("body").css("background-color", "#fff0f0");
  } else {
    $("body").css("background-color", "#cdccc7");
  }

});