document.addEventListener("DOMContentLoaded", function() {






//* POPUP */

$('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку
	$('.overlay_popup, .sign').hide();
	var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
	$('.overlay_popup').show(); // Открываем блок заднего фона
	$(popup_id).show(); // Открываем окно
})
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
	$('.overlay_popup, .sign').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})
$('.popup-close').click(function() { // Обрабатываем клик по заднему фону
	$('.overlay_popup, .sign').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})

//* POPUP END*/


});

//////////////////////////////////////////////////////////////////////////////////////////////////
//* Read more*/

	$(".blog-card-btn").on("click", function () {
			var txt = $(".showhide").is(':visible') ? 'Подробнее' : 'Скрыть';
			$(".blog-card-btn").text(txt);
			$('.showhide').slideToggle(200);
	});
//* Read more end*/

///////////////////////////////////////////////////////////////////////////////////////////////////


//* Alert */
const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
})

Toast.fire({
	icon: 'success',
	title: 'Signed in successfully'
})


const Gift =	Swal.mixin({
	title: 'Вы выиграли',
	text: 'Ваш приз составил 0,05BFF',
	imageUrl: './images/src/img/ico/surprise.svg',
	imageWidth: 400,
	imageHeight: 200,
	imageAlt: 'Custom image',
})

//* Alert end */



////////////////////////////////////////////////////////////////////////////////////



//* WHEEL HAPPY */
var value = 0;
var countClicked = 0;
var clicked = false;
function getPosition(position) {
		if (position <= 30) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: 'Ваш приз составил 0,005BFF',
			})
		}
		else if (position <= 90) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: 'Ваш приз составил 0,005BFF',
			})
		}
		else if (position <= 150) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: 'Ваш приз составил 0,005BFF',
			})
		} else if (position <= 210) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: 'Ваш приз составил 0,005BFF',
			})
		} else if (position <= 270) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: 'Ваш приз составил 0,005BFF',
			})
		}
		else if (position <= 330) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: 'Ваш приз составил 0,005BFF',
			})
		}
		else {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: 'Ваш приз составил 0,005BFF',
			})
		}
		clicked = false;
		countClicked = 0;
}
$('.wheel__button').click(function () {
	$('#wheel-check').submit(function (e) {
    e.preventDefault();
		if (clicked == true) {
				countClicked++;
		}
		else {
				let random = Math.floor((Math.random() * 360) + 720);
				value += random;
				console.log(random % 360);
				console.log(value % 360);
				$(".wheel__inner").css("transform", `rotate(${value}deg)`);
				setTimeout(() => {
						//Chia lấy dư cho 360 để lấy lượng quay không hoàn thành một vòng 360deg
						getPosition(value % 360);
				}, 5000);
		}
		clicked = true;
	})
})


//* WHEEL HAPPY  End*/

///////////////////////////////////////////////////////////////////////////////////////////

//* Select*/
$(".default_option").click(function(){
  $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
})
//* Select end*/


///////////////////////////////////////////////////////////////////////////////////


if($("div").hasClass("point-slider")) {

//* SLIDER */
/* Индекс слайда по умолчанию */
var slideIndex = 0;
showSlides(slideIndex);
autoSlider();

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoSlider() {
	var i;
	var slides = document.getElementsByClassName("item");
	var dots = document.getElementsByClassName("slider-dots_item");
	for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex> slides.length) {slideIndex = 1}
	for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	setTimeout(autoSlider, 6000); // Измените значения авто прокрутки в миллисекундах (ms), пример 6000 это 6 секунд
	}
}
//* SLIDER  END*/


///////////////////////////////////////////////////////////////////////////