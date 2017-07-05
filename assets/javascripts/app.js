$(document).ready(function () {
	$(".jumbotron__request").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 800);
	});

	$('.multiple-items').slick({
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$(".form").submit(function () {
		var name = $('#name').val();
		var phone = $('#phone').val();
		if ((name.length === 0) || (phone.length === 0)) {
			alert('Заполните все поля');
			return false;
		} else {
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $(this).serialize(),
				success: function (result) {
					$('form.form :input').removeAttr('disabled');
					$('form.form :text').val('');
					$('.popup--success, .overlay').fadeIn(350);
				}
			});
			return false;
		}
	});
	$('.overlay, .popup__cansel').click(function () {
		$('.overlay, .popup').fadeOut(350);
	});
	jQuery(function ($) {
		$.mask.definitions['~'] = '[+-]';
		$('#phone').mask('+7(111) 111-11-11');
	});
});
