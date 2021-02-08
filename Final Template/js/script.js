$(document).ready(function(){

	$(".fas.fa-search").click(function(){
		console.log(123132);
		$(this).parents('form').find('input.form-control').toggleClass('myClass')
	});



	var mybutton = document.getElementById("myBtn");
	
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
  	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    	mybutton.style.display = "block";
  	} else {
    	mybutton.style.display = "none";
  	}
	}


$('.headerLinks li').on('click', function(e){
	e.preventDefault();
	var attrHref = $(this).find('a').attr('id');
	var scrolltop = $('.' + attrHref).offset().top;
	console.log($('.' + attrHref).offset().top);
	$('body').animate({scrollTop: scrolltop}, 500)
})


	
})
function topFunction() {
  		$('body').animate({scrollTop: 0}, 500)
	}