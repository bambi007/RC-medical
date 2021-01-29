let hamburger = document.querySelector('.burger');
let menu = document.querySelector('#menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  menu.classList.toggle('mobile-open');
})