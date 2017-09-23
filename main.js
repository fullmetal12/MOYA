(function($){
	var pageSections = $('.animated-section');

	function animateScroll() {
		var windowScroll = $(window).scrollTop();
		pageSections.each(function(){
			var singleSection = $(this);
			//add or remove the fixed class according to windowScrollTop and sectionOffesetTop
			singleSection.toggleClass('fixed', singleSection.offset().top <= windowScroll);
		});
		scrolling = false;
	}
	//debounce variable
	var scrolling = false;
	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;

			( !window.requestAnimationFrame ) 
				? setTimeout(animateScroll, 250) //fallback if requestAnimationFrame is not defined
				: requestAnimationFrame(animateScroll);
		}
	});
	animateScroll();
})(jQuery);
