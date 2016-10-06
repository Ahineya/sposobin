$(document).ready(function() {
	$("img:not(.orphus):not(.icon)").on("click", function(e) {

		$(".overlay").show();

		e.stopPropagation();

		const imgClone = $(this).clone();

		if (imgClone.width() > imgClone.height()) {
			imgClone.css({
				height: "100%",
    			width: "auto"
			});
		} else {
			imgClone.css({
				height: "auto",
    			width: "100%"
			});
		}

		var div = $("<div>").addClass("lightbox").append(imgClone);
		$("body").append(div);

		$("body").on("click", clean.bind(null, div));
		$("body").on("keypress", clean.bind(null, div));

		function clean(div) {
			div.remove();
			$("body").off("click");
			$("body").off("keypress");
			$(".overlay").hide();
		}

	});
});