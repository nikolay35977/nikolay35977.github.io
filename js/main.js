$(function () {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

	/* fixed header */
	checkScroll(scrollOffset);
	
	$(window).on("scroll", function(){

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset){

		if (scrollOffset >= introH){
			header.addClass("fixed");

		}
		else{
			header.removeClass("fixed");
		}
	}


	/* smooth scroll */
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			elemId = $this.data('scroll'),
			blockOffset = $(elemId).offset().top;

		$("nav a").removeClass("active")
		$this.addClass("active");

		$('html, body').animate({
			scrollTop: blockOffset
		},500);

		$("#nav-togle").removeClass("active");
		$("#nav").removeClass("active");
	});

	/* Menu nav toggle  */
	$("#nav-togle").on("click", function(event){
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");

		if (false){
			$(this).removeClass("active");
			$("#nav").removeClass("active");
		}

	});


	/* collapse */
	$("[data-collapse]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			elemId = $this.data('collapse');

		$this.toggleClass('active');


	});

	/* Slider */
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1

	});


});