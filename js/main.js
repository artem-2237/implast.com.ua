jQuery(document).ready(function(){

	$('.phone-mask').inputmask('+38 (999) 999-99-99');

	$('.slider').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.portfolio__slider').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.slider__brief').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.brief__prev'),
		nextArrow: $('.brief__next'),
		dots: true
	})

	let briefLi = $('.slick-dots li:last');
	let briefLiFirst = $('.slick-dots li:not(.slick-dots li:last)');
	let brieNext = $('.brief__next');
	let briefPrev = $('.brief__prev');
	let briefButtonRoof = $('.disabled__button_roof');
	brieNext.click(function () {
		if (briefLi.hasClass('slick-active')) {
			brieNext.addClass('disabled__button');
			briefButtonRoof.css('display', 'block');
		}
	})	
	briefPrev.click(function () {
		brieNext.removeClass('disabled__button');
		briefButtonRoof.css('display', 'none');
	})
	briefLi.click(function () {
		brieNext.addClass('disabled__button');
		briefButtonRoof.css('display', 'block');
	})
	briefLiFirst.click(function () {
		brieNext.removeClass('disabled__button');
		briefButtonRoof.css('display', 'none');
	})
	

	$('.open-popup-form').magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
		midClick: true,
		closeMarkup: '<span class="mfp-close close svg"></span>'
	});
	$(".open-popup-video").magnificPopup({
		type: 'iframe',
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 160,
		preloader: false,
  });

	$('.lead-form').submit(function(e) {
		e.preventDefault();
		$(location).attr('href','thankyoupage.html');
	});

}); // end ready