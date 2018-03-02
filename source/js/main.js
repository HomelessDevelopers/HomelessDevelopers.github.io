(function($) {

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
      $('.full-height').css('height', this.WindowHeight);


    };

    return FullHeight;
  }(jQuery));

  $(window).on("load", function() {

    var FH = new FullHeight;

    if($(window).width() <= 580 ){
      $("header").addClass("mobile-header");
    }
  });
  $(window).on("resize", function() {

    var FH = new FullHeight;
  });
  $(document).ready(function() {

    var FH = new FullHeight;
    setTimeout(function () {
      $("body").addClass('loaded');
    }, 2000);

  });

  $(".feedback-slider").slick({
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    focusOnSelect: false,
    mobileFirst: true,
    appendDots: $('.feedback-bullets')
  });

  $(window).on("load", function() {
    $(".portfolio-slide").twentytwenty();
  });

  //fit slider

  $('.fit-slider').find('.fit-slide').each(function(index) {
    index == 0
      ? $(this).addClass('fadeInLeft current')
      : false;
    $('#fit-slider-images').append('<div class = "fit-slider-image ' + (
      index == 0
      ? "current " : " ") + ' "> </div>');
    $(".fit-slider-image").eq(index).css('background-image', 'url(" ' + $(".fit-slide").eq(index).find("img").stop().attr("src") + ' ")');

    $()
    $(this).addClass("animated");

  });



function FitSlider(speed)
{
  var index = 0;


    function NextSlide(){

      index >= $(".fit-slide").length ? index = 0 : false;

      var $index = index + 1;
      $index >= $(".fit-slide").length ? $index = 0 : false;

      $(".fit-slider-image").eq(index).removeClass("current");
      $(".fit-slider-image").eq($index).addClass("current");

      if($(".fit-slide").eq(index).hasClass("fadeInLeft"))
      {
        $(".fit-slide").eq(index).removeClass("fadeInLeft").addClass("fadeOutUp");
        $(".fit-slide").eq($index).addClass("fadeInLeft current");
      }
      if($(".fit-slide").eq($index).hasClass("fadeOutUp")){
        $(".fit-slide").eq($index).removeClass("fadeOutUp");
      }


      index ++;
      setTimeout(NextSlide, speed );
    }

   setTimeout(NextSlide, speed );
}


  $(document).ready(function() {
    FitSlider(5000);
    $(".mobile-nav-triger").on("click" , function(){
      $(".mobile-nav-overlay").css("display" , "block").addClass("fadeIn");
    })
    $(".mobile-nav-overlay").on("click" , function(){
      $(this).removeClass("fadeInDown").addClass("fadeOutUp");
      setTimeout(function () {
        $(".mobile-nav-overlay").removeClass("fadeOutUp").css("display" , "none");
      }, 1000);

    });

    $.ripple(".ripple-animation , .button-ripple", {
      debug: false, // Turn Ripple.js logging on/off
      on: 'mousedown', // The event to trigger a ripple effect

      opacity: 0.4, // The opacity of the ripple
      color: "auto", // Set the background color. If set to "auto", it will use the text color
      multi: false, // Allow multiple ripples per element

      duration: 0.6, // The duration of the ripple

      // Filter function for modifying the speed of the ripple
      rate: function(pxPerSecond) {
        return pxPerSecond;
      },

      easing: 'linear' // The CSS3 easing function of the ripple


    });
  });


}(jQuery))
