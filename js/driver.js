$(function() {

	// Countdown Timer setup
	var countDownDate = new Date("Aug 6, 2018 18:00:00").getTime();
	var DAY = $("#cday");
	var HOUR = $("#chr");
	var MIN = $("#cmin");
	var SEC = $("#csec");

	var countDownTimer = setInterval(function() {

		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		DAY.text(days);
		HOUR.text(hours);
		MIN.text(minutes);
		SEC.text(seconds);

		if (distance < 0) {
			clearInterval(countDownTimer);
			$("#countDownBlock")
				.empty()
				.append('<div class="p-4 display-3">Welcome to EAW!</div>').fadeIn();
		}
	}, 1000);

	// resize logo on scroll >= 100
	var navbar_logo = $(".navbar-brand");
	var logo_width_old = navbar_logo.css("width")
	var logo_background_old = navbar_logo.css("background-color")

	// update `.active` for current menu area
	var topMenu = $("#PrimaryMenu"),
		topMenuHeight = topMenu.outerHeight() + 15,
		menuItems = topMenu.find("li a"),

		scrollItems = menuItems.map(function() {
			var item = $($(this).attr("href"));
			if (item.length) {
				return item;
			}
		});

	$(window).on("scroll", function() {
		// resize logo on scroll >= 100
		if ($(this).scrollTop() >= 100) {
			navbar_logo.css({
				'width': '12rem',
				'background-color': logo_background_old
			});
		} else {
			navbar_logo.css({
				'width': logo_width_old,
				'background-color': 'none'
			});
		}

		// update `.active` for current menu area
		var fromTop = $(this).scrollTop() + topMenuHeight;
		var cur = scrollItems.map(function() {
			if ($(this).offset().top < fromTop) {
				return this;
			}
		});
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";
		menuItems
			.parent().removeClass("active")
			.end().filter("[href='#" + id + "']")
			.parent().addClass("active");
	});

	$('.nav-link').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});
});