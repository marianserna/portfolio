$(function () {
  var controller;
  var scenes;

  var initSlides = function() {
      if (controller != undefined) {
        return;
      }
      controller = new ScrollMagic.Controller({});

      // get all slides
      var slides = document.querySelectorAll("section.panel");

      // create scene for every slide
      scenes = [];
      for (var i=0; i<slides.length; i++) {
        var scene = new ScrollMagic.Scene({
            triggerElement: slides[i],
            triggerHook: 'onLeave',
            duration: 0
          })
          .setPin(slides[i])
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
  };

  var unsetAll = function() {
    if (controller != undefined) {
      controller = controller.destroy(true);
      $('.scrollmagic-pin-spacer').remove();
    }
  }

  var initOrUnset = function() {
    if ($('body').width() <= 800) {
      unsetAll();
    } else {
      initSlides();
    }
  }

  initOrUnset();

  $(window).resize(_.debounce(initOrUnset, 300));
});