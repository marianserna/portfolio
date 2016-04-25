// run code when page is ready
$(function() {
  // when someone clicks a link in the nav
  // scroll them to where they want to go on page
  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    // get href attribute of link that was clicked
    var id = $(this).attr('href');
    // scroll to this id
    scrollTo(id);
  });

  // when someone clicks arrow, take them to about section
  $('#intro').on('click', '.arrow', function() {
    scrollTo('#about-text');
  });

  // function that scrolls browser to position of
  // an html element, using its id
  function scrollTo(id) {
    // determine where on page is this html element
    var new_position = $(id).offset().top - 25
    // scroll them to the new position
    $("body").animate({ scrollTop: new_position }, 500);
  }

  // when page loads, menu is not active
  var active = false;
  // when someone clicks on menu trigger (hamburger)
  $('.menu-trigger').on('click', function(e) {
    e.preventDefault();

    // find trigger and nav elements
    var trigger = $('.menu-trigger');
    var nav = $('nav');

    // if active, we want to slide back in (-200 pixels to the right)
    if (active) {
      active = false;
      trigger.animate({"right": '-=130'});
      nav.animate({"right": '-=130'});
    } else {
      active = true;
      trigger.animate({"right": '+=130'});
      nav.animate({"right": '+=130'});
    }
  });
});
