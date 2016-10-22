var iso;

window.addEventListener('load', function() {
  var element = document.querySelector('.grid');
  if (element) {
    iso = new Isotope(element, {
      itemSelector: '.grid-item'
    });
  }
});

function filterGrid(selector) {
  iso.arrange({
    filter: selector
  });
}
