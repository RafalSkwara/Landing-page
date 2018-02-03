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

// end jQuery, still in document.ready()


}); // end ready

function Model() {
	this.scrollY = 0;
	this.visibleModules=[];

}


function View(model) {
	this.model;

	this.LINES = document.querySelectorAll('.line');
	this.MODULES = document.querySelectorAll('.module');
}

function Controller(model, view) {
	this.model = model;
	this.view = view;

	window.addEventListener('scroll', () => {
		model.scrollY = window.scrollY;
		view.MODULES.forEach(module => {
			if ((window.innerHeight + window.scrollY) > module.offsetTop*1.1) {
				module.classList.add('opaque')
			} else {
				module.classList.remove('opaque')
			}
		});
		view.LINES.forEach(line => {
			if ((window.innerHeight + window.scrollY) > line.offsetTop) {
				line.classList.add('visible')
			} else {
				line.classList.remove('visible')
			}
		})
	});
	//initial app state:


}

function init() {
	let model = new Model();
	let view = new View(model);
	let controller = new Controller(model, view);
}

document.onload = init();