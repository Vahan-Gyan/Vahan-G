"use strict";

var images = [
'MTVhMzlmZjFmNjcxMDk.png',
'Glyph-Icon-hero.png',
'acastro_180403_1777_youtube_0001.0.jpg'
];

var img = document.querySelector('img');
var i = 0;
img.setAttribute('src', images[i]);

var pr = document.getElementById('pr');
var ne = document.getElementById('ne');

ne.onclick = function(){
	if(i >= images.length - 1){
          i = -1;
	}
    img.setAttribute('src', images[++i]);
}

pr.onclick = function(){
	if(i == 0 ){
          i = images.length;
	}
    img.setAttribute('src', images[--i]);
}