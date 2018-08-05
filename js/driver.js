$(function() {
	var navbar_logo = $(".navbar-brand");
	var logo_width_old = navbar_logo.css("width")
	var logo_background_old = navbar_logo.css("background-color")
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 100) {
			// navbar_logo.css("width", "4rem");
			navbar_logo.css({
				'width': '4rem',
				'background': logo_background_old
			});
		} else {
			navbar_logo.css({
				'width': logo_width_old,
				'background': 'none'
			});
		}
	});
});