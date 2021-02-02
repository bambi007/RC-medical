let testimonials = document.getElementById('testimonials');
let seeMoreButton = document.getElementById('see-more');
let testimonialsHeight = (testimonials.scrollHeight + 'px');
console.log(testimonialsHeight)
console.log(testimonials)

seeMoreButton.addEventListener('click', function () {
  testimonials.classList.add('expand');
  testimonials.style.height = testimonialsHeight
  seeMoreButton.style.display = 'none';
});