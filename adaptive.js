$(function () {

	var wWidth = $(window).width();

	$(".menu-link").on("click", function () {
		if(wWidth < 1024 && $(this).parent().find('.menu-dropdown').length == 1){
			$(this).siblings('.menu-dropdown').stop().slideToggle(300);
			return false;
		}
	});

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

	// $('.fancybox-iframe').load(function() { 
	// 	alert('gg2');
 //       this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
	// });

	// $('.crcl2').fancybox({
	// 	type: 'iframe',
	// 	autoHeight: true,
	// 	scrolling : 'no', // changes CSS property "overflow" for the "fancybox-inner" element
	// 	iframe : {
	// 	    scrolling : 'no', // changes "scrolling" for the iframe only
	// 	    preload   : true
	// 	},
	// 	afterLoad: function(current) {
	// 		alert($('.fancybox-iframe').height());
	//     },
	// 	afterShow: function(){
	// 		alert($('.fancybox-iframe').height());
	// 	}
	// });
});

$(function(){ 
	var paused = false,
		out = 250,
		$toTop = $('.to_top .to_top_button');

	var stickyToTop = function () {
		
		var scrollTop = $(window).scrollTop();

		if( (scrollTop) > out){
		  if (!paused) {
			$toTop.addClass('_active');
			paused = true;
		  }
		} else{
		  if (paused) {
			$toTop.removeClass('_active');
			paused = false;
		  }
		}
	}
	stickyToTop();

	$toTop.on('click', function () {
		$(window).scrollTop(0);
	});


	$(window).scroll(function(){
		stickyToTop();
	});
});