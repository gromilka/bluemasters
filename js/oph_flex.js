$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    slideshow: true,
    minItems: 1, //Указываем число слайдов показаных на линии
    maxItems: 1, //Указываем максимальное число слайдов
    controlNav: true,             
	directionNav: false,
	animationDuration: 700,
	pauseOnHover: true
  });
});