$(document).ready(function(){
	$('.arrow-one').click(function(e){
		e.preventDefault();
		$('html, body').animate({
		scrollTop: $("#content").offset().top
	}, 1000);
	}); //end href click

	$('.arrow-two').click(function(e){
		e.preventDefault();
		$('html, body').animate({
		scrollTop: $("#first").offset().top
	}, 1000);
	}); //end href click



}); // end ready