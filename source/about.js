'strict';

// let images = document.getElementById('.images');
// let sample = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg', 'i5.jpg'];
// setInterval(function () {
//   let num = Math.floor(Math.random() * 5);
//   images.src = sample[num];
// }, 4000);
var counter = 1;
setInterval(function () {
  document.getElementById('r' + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 2000);
