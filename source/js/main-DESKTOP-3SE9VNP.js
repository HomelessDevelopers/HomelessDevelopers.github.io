(function($){


	args = {
		links : Array("images/pic01.jpg" , "images/pic02.jpg" , "images/pic03.jpg"),
		SlideTitle : Array("Создай тело своей мечты" , "Скидка Сезона" , "Акция") ,
		SlideText : Array("text 1" , "Text 2" , "Text 3") ,
		container : document.getElementById("slides-container"),
		AnimationDelay : 2000,
		AnimationSpeed : 200,



	}
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


	var slider = (function() {
		'use strict';
	
		function slider(args) {
			// enforces new
			if (!(this instanceof slider)) {
				return new slider(args);
			}
			this.links = args.links;
			this.container = args.container;
			this.AnimationDelay = args.AnimationDelay;
			this.AnimationSpeed = args.Speed
			this.SlideTitle = args.SlideTitle;
			this.SlideText = args.SlideText;
			this.init();
		}
		slider.prototype.CreateSlide = function(index){
			var SlideItem = document.createElement("DIV");
			SlideItem.className="slide-item";
			SlideItem.style.backgroundImage = "url( " +  this.links[index] + ")";

			var SlideContent = document.createElement("DIV");
			SlideContent.className = "slide-content";
			var SlideContentWrapper = document.createElement("DIV");
			SlideContentWrapper.className = "wrapper"
			var SlideContentRow = document.createElement("DIV");
			SlideContentRow.className = "row";
			var SlideContentColumn = document.createElement("DIV");
			SlideContentColumn.className = "col-md-6";
			var SlideTitleContainer = document.createElement("DIV");
			SlideTitleContainer.className="title-container";
			var SlideTitle = document.createElement("H1");
			SlideTitle.innerHTML = this.SlideTitle[index];
			var SlideTextContainer = document.createElement("DIV");
			SlideTextContainer.className = "slide-text";
			var SlideText = document.createElement("P");
			SlideText.innerHTML = this.SlideText[index];

			//Construct

			SlideTextContainer.appendChild(SlideText);
			SlideTitleContainer.appendChild(SlideTitle);
			SlideContentColumn.append(SlideTitleContainer , SlideTextContainer);
			SlideContentRow.appendChild(SlideContentColumn);
			SlideContentWrapper.appendChild(SlideContentRow);
			SlideContent.appendChild(SlideContentWrapper);
			SlideItem.appendChild(SlideContent);
			this.container.appendChild(SlideItem);

		}
		slider.prototype.init = function(args) {
			
				for (var i = 0;   i < this.links.length ; i++) {
					this.CreateSlide(i);
				}

				// DEMO WILL BE DELETED LATER
				var iterator = 0;
				$(".slide-item").first().addClass("current");
				function carousel(){
					setTimeout(function() {
						if( iterator >= $(".slide-item").length ){
							iterator = 0;
						}
						$(".slide-item").eq(iterator-1).removeClass("current");
						$(".slide-item").eq(iterator).addClass("current");
						iterator++;
						console.log(iterator);
						console.log($(".slide-item").length);
						setTimeout(carousel, 2000);
					}, 2000);
				}
				setTimeout(carousel, 2000)
				
		};
	
		return slider;
	}());






	$(window).on("load" , function(){

		var FH = new FullHeight;
	});
	$(window).on("resize" , function(){	

		var FH = new FullHeight;});
	$(document).ready(function(){

		var FH = new FullHeight;
		var FitSlider = new slider(args);

	})



}(jQuery))