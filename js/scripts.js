$(document).ready(function() {
	$("img").on("click", function(e) {

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

		$("body").on("click", function() {
			div.remove();
			$("body").off("click");
			$("body").off("keypress");
		});

		$("body").on("keypress", function() {
			div.remove();
			$("body").off("click");
			$("body").off("keypress");
		});

	});
});