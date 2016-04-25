$(function() {
  $('img.intro').velocity({ bottom: 0, opacity: 1 }, 1500);
  $('#home h1').velocity({ opacity: 1 }, {
    duration: 2000,
    delay: 1500
  });
  $('#home li').velocity("transition.slideLeftIn", { stagger: 250, delay: 2000 });
});