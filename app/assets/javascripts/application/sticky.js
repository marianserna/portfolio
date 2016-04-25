$(function () {
  // init
  var controller = new ScrollMagic.Controller({});

  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  var scenes = [];
  for (var i=0; i<slides.length; i++) {
    var scene = new ScrollMagic.Scene({
        triggerElement: slides[i],
        triggerHook: 'onLeave',
        duration: 0
      })
      .setPin(slides[i])
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
    scenes.push(scene);
  }

  var after = document.getElementById('after');
  var scene = new ScrollMagic.Scene({
      triggerElement: after,
      triggerHook: 'onLeave',
      duration: '100vh'
    })
    .setPin(after)
    .addTo(controller);
  scenes.push(scene);
});
