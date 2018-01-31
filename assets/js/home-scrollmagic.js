var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  offset: 0,
  duration: 600,
}).on("progress", function (event) {
  opacity = 1 - event.progress;
  scale = 1 - 0.5 * event.progress;
  $(".home-box").css("opacity", opacity);
  $(".home-box").css("transform", `translate(-50%, -50%) scale(${scale}, ${scale})`);
}).addTo(controller);
