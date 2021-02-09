'use strict';

function myMove() {
  var elem = document.getElementById("animate");   
  var position = 0;
  var id = setInterval(time, 5);
  function time() {
    if (position == 350) {
      clearInterval(id);
    } else {
      position++; 
      elem.style.top = position + "px"; 
      elem.style.left = position + "px"; 
    }
  }
}