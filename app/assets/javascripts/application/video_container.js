$(function() {
  var calc_container_height = function(container_selector) {
    var biggestHeight= 0;
    // Loop thru elements children to find & set the biggest height
    $(container_selector + " > *").each(function(index,elem){
      // if this elemets height is bigger than the biggest height
      if ($(elem).height() > biggestHeight) {
        // Set the biggest height to this height
        biggestHeight = $(elem).height();
      }
    });
    // Set the container height
    $(container_selector).height(biggestHeight);
  };

  calc_container_height(".animation-intro-container");
  $(window).resize(function() {
    calc_container_height(".animation-intro-container");
  });
});