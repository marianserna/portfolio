$(function () {
  var setupNivo = function() {
    $('#slider').nivoSlider({
      effect: 'boxRain',
      pauseTime: 4000
    });
  }
  setupNivo();

  var onResize = function() {
    setupNivo();
  };
  $(window).resize(_.debounce(onResize, 300));
});
