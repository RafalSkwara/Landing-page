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



	$('.description > h2, .description > p, .arrow-two').hide();

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('.description').position().top-50){
        $('.description > h2, .description > p, .arrow-two').fadeIn(1400);
    }
})


}); // end ready