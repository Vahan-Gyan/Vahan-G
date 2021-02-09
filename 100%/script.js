'use strict';

function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
  // function vsyo() {
  // 	if (width >= 100) {
  // 		elem.style.background-color = red;
  // 	}
  // }
}