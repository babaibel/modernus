$(function () {

	$('.js-mob-menu').click(function() {
		$('body').toggleClass('_open-menu').removeClass('_open-search _open-catalog');
		return false;
	});

	$('.js-mob-search').click(function() {
		$('body').toggleClass('_open-search').removeClass('_open-menu _open-catalog');
		return false;
	});

	$('.js-mob-catalog').click(function() {
		$('body').toggleClass('_open-catalog').removeClass('_open-menu _open-search');
		return false;
	});

});
