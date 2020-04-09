$(document).ready(function() {
	$(".nav-item").click(function(){

		// id yg dituju
		let id = $(this).attr('href');

		// posisi konten dari atas
		let atas = $(id).offset().top;

		$('body, html').animate({
			scrollTop : atas}, 1500);
	});
});

// $(document).ready(function() {
// 	$('#toTop').click(function(){
// 		$('body, html').animate({
// 			scrollTop : 0}, 1000);
// 		return false;
// 	});
// });

var $backToTop = $("#toTop");
	
	$backToTop.hide();
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 2800) {
			$backToTop.fadeIn();
		} else {
			$backToTop.fadeOut();
		}
	});

	$backToTop.on('click', function(e){
		$('body, html').animate({
			scrollTop : 0}, 500);
		return false;
	});