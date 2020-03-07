document.addEventListener("DOMContentLoaded", function() {


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





});


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


//* SLIDER  END*/