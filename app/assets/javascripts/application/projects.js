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

function toggleFilter() {
  var filter_nav = document.querySelector('nav.projects');
  filter_nav.classList.toggle('open');
  var trigger = document.querySelector('.filter_trigger');
  trigger.classList.toggle('open');
}
