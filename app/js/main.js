$(document).ready(function() {
	$(".toggle_mnu").click(function() {
			$(".sandwich").toggleClass("active");
		});
		$(".main-nav ul a").click(function() {
			$(".top-menu").fadeOut(600);
			$(".sandwich").toggleClass("active");
		}).append("<span>");

		$(".toggle_mnu").click(function() {
			if ($(".top-menu").is(":visible")) {
				$(".top-menu").fadeOut(600);
			} else {
				$(".top-menu").fadeIn(600);
			};
		});
});