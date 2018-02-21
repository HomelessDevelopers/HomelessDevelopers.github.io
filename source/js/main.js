(function($){

	//FullHeight Object


	var FullHeight = (function($) {
		'use strict';

		function FullHeight(args) {
			// enforces new
			if (!(this instanceof FullHeight)) {
				return new FullHeight(args);
			}
			this.HeaderHeight = $("header").height();
			this.WindowHeight = $(window).height();
			this.init();
		}

		FullHeight.prototype.init = function(args) {
			$('.full-height').css('height' , this.WindowHeight );
		};

		return FullHeight;
	}(jQuery));





	$(window).on("load" , function(){

		var FH = new FullHeight;
	});
	$(window).on("resize" , function(){

		var FH = new FullHeight;});
	$(document).ready(function(){

		var FH = new FullHeight;

	});


$(".feedback-slider").slick({
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 2000,
	dots : true,
	focusOnSelect : false,
	mobileFirst : true,
	appendDots : $('.feedback-bullets'),
});



$(window).on("load" , function(){
  $(".portfolio-slide").twentytwenty();
});



//fit slider



$('.fit-slider').find('.fit-slide').each(function(index) {
	index == 0 ?  $(this).addClass('current fadeInLeft') : false;
	$('#fit-slider-images').append('<div class = "fit-slider-image animated'+(index == 0 ? " current" : " ") + ' "> </div>');
	$(".fit-slider-image").eq(index).css('background-image' , 'url(" ' + $(".fit-slide").eq(index).find("img").stop().attr("src") + ' ")' );

	$()
	$(this).addClass("animated");

});





function FitSlider(){
	var index = 0;
	var speed = 3000;

	function	NextSlide(){
		index == $(".fit-slide").length ? index = 0 : false;
		$(".fit-slider-image").eq(index).removeClass("fadeIn").addClass("fadeOut");
		$(".fit-slide").eq(index).removeClass("fadeInLeft").addClass("fadeOutLeft");
		setTimeout(function () {
			$(".fit-slider-image").eq(index).removeClass("current fadeOut");
			$(".fit-slider-image").eq(index).next().addClass("current fadeIn");
			$(".fit-slide").eq(index).next().addClass("current fadeInLeft");
		}, speed);
		console.log(index);
		index ++;
		setTimeout(NextSlide , speed);

	}
	setTimeout(NextSlide, speed);
}
//setTimeout(FitSlider, 3000);










}(jQuery))
