function filterGrid(selector) {
  var gridItems = document.querySelectorAll('.grid-item');
  for(var i = 0; i < gridItems.length; i++) {
    if (gridItems[i].classList.contains(selector)) {
      gridItems[i].style.display = 'block';
    } else {
      gridItems[i].style.display = 'none';
    }
    gridItems[i].classList.remove('grid-item--half');
  }
}

function toggleFilter() {
  var filter_nav = document.querySelector('nav.projects');
  filter_nav.classList.toggle('open');
  var trigger = document.querySelector('.filter_trigger');
  trigger.classList.toggle('open');
}

window.sr = ScrollReveal();
sr.reveal('.grid-item', {
  duration: 1000,
  delay: 500
}, 250);
