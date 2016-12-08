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
  // trigger scroll reveal (video wasn't showing right away)
  window.scrollBy(0, 2);
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
  delay: 250
});

sr.reveal('.about_text', {
  duration: 1000,
  delay: 250
});

sr.reveal('.caseHero, .information, .fullWidthImage, .challengeInnerContainer, .videos, .result, .wireframes img', {
  duration: 500,
  delay: 250
});
