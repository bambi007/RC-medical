let counters = document.getElementsByClassName('count');
let counter = document.getElementById('count')
let counterValues = [356, 82, 24, 36, 489];

function counting(id, obj, start, end, duration) {
  if (start === end) return;
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer)
    }
  }, stepTime)
}

window.addEventListener('load', function () {

  Array.from(counters).forEach((element, index) => {
    counting("value", element, 0, counterValues[index], 500);
  })
})
