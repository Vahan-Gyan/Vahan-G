'use strict';

var text = document.getElementById('text');
var bar = document.getElementsByClassName('listik');
text.oninput = function(){
	// console.log(text.value);
	for (var i = 0; i < bar.length; i++) {
		var str = bar[i].innerText.toUpperCase()
		if (str.indexOf(text.value.toUpperCase())  == -1){
			bar[i].style.display = 'none';
		}else{
			bar[i].style.display = 'block';
		}
	}
}