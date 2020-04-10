document.addEventListener("DOMContentLoaded", function() {

//*Scroll Sweet */

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
//*Scroll Sweet end*/

//* TABS */
$('.year-road').click(function(){
	$('.year-road').addClass('year-none');
	$(this).removeClass('year-none');
	let tagTab = $(this).attr('rel');
	$('.year-road-one').hide();
	$('.year-road-two').hide();
	$('.'+tagTab).show();

})

//* TABS END*/

//////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////

//* MAIL */
$('#sendMail').on('click', function(){
	let nameSend = $('#LonginSend').val().trim();
	let loginSend = $('#AppLoginSend').val().trim();
	let wishesSend = $('#WishesSend').val().trim();
	let emailTitle = $('.email-title').text();
	let emailDesc = $('.email-desc').text();
	let emailnoTitle = $('.emailno-title').text();
	let emailnoDesc = $('.emailno-desc').text();
	$('#formContacts').submit(function(e){
		e.preventDefault();
		if(!nameSend || !loginSend || !wishesSend)	return false;
	$.ajax({
		url: './mailSend.php',
		type: 'POST',
		cache: false,
		data: {
			'name': nameSend,
			'login': loginSend,
			'messege': wishesSend,
		},
		dataType: 'text',
		beforeSend: function() {
			$('#sendMail').prop('disable', true);
		},
		success: function(data){
			if(data == true){
			$('#formContacts').trigger('reset');
			Swal.fire({
				icon: 'success',
				title: emailTitle,
				text: emailDesc,
			})
			setTimeout($('#sendMail').prop('disable', false), 10000);
		} else if (data == false) {
			console.log(data);
			Swal.fire({
				icon: 'error',
				title: emailnoTitle,
				text: emailnoDesc,
			})

		}
		},

	});
});
});


$('#ask-form-subbmit').on('click', function(){
	let nameSend = 'none name';
	let loginSend = $('#AppLoginSende').val().trim();
	let wishesSend = 'none';
	let emailTitle = $('.email-title').text();
	let emailDesc = $('.email-desc').text();
	let emailnoTitle = $('.emailno-title').text();
	let emailnoDesc = $('.emailno-desc').text();
	$('#formContactse').submit(function(e){
		e.preventDefault();
		if(!nameSend || !loginSend || !wishesSend)	return false;
	$.ajax({
		url: './mailSend.php',
		type: 'POST',
		cache: false,
		data: {
			'name': nameSend,
			'login': loginSend,
			'messege': wishesSend,
		},
		dataType: 'text',
		beforeSend: function() {
			$('#ask-form-subbmit').prop('disable', true);
		},
		success: function(data){
			if(data == true){
			$('#formContactse').trigger('reset');
			Swal.fire({
				icon: 'success',
				title: emailTitle,
				text: emailDesc,
			})
			setTimeout($('#ask-form-subbmit').prop('disable', false), 10000);
		} else if (data == false) {
			console.log(data);
			Swal.fire({
				icon: 'error',
				title: emailnoTitle,
				text: emailnoDesc,
			})

		}
		},

	});
});
});


//* MAIL END */
//////////////////////////////////////////////////////////////////////////////////////////
//* HASH */

window.addEventListener('hashchange', hashchange);
$(window).bind('hashchange', hashchange); 
	hashchange();
function hashchange(){ 
	var hash = location.hash;
	if( hash == "#login"){
		$('.overlay_popup, .sign').hide();
		$('.overlay_popup').show();
		$('#sign-in').show();	}
	if( hash == "#returnpass_1"){
			$('.overlay_popup, .sign').hide();
			$('.overlay_popup').show();
			$('#returnpass').show();	}
	if( hash == "#sign"){
		$('.overlay_popup, .sign').hide();
		$('.overlay_popup').show();
		$('#sign-up').show();
	}
	if (hash == "#twofa") {
		$('.overlay_popup, .sign').hide();
		$('.overlay_popup').show();
		$('#sign-twofa').show();
	}
	if (hash == "#regconfirm") {
		$('.overlay_popup, .sign').hide();
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Проверьте E-mail',
			showConfirmButton: false,
			timer: 2500
		})
	}
	
	if (hash == "#newpasssuccess") {
		$('.overlay_popup, .sign').hide();
		Swal.fire({
			icon: 'success',
			title: 'Пароль изменен',
			text: 'Вы успешно изменили пароль!',
		})
	}


	
}

//* HASH END */

//////////////////////////////////////////////////////////////////////////////////////////

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


const Gift =	Swal.mixin({
	title: 'You win',
	text: 'Ваш приз составил 0,05BFF',
	imageUrl: './images/src/img/ico/surprise.svg',
	imageWidth: 400,
	imageHeight: 200,
	imageAlt: 'Custom image',
})

$('.checkbox-wrap-desc').click(function (e) {
e.preventDefault();
privace = $('.privace').text();
Swal.fire({

  title: '<strong>Политика конфедициальности</strong>',
  html:
    '<p style="max-height: 20em; text-align: left;font-size: 0.8em;border: 1px solid rgba(0,0,0,0.2);border-radius: 10px;padding: .5em;overflow: scroll;">'+ privace +'</p> ',
  showCancelButton: true,
	cancelButtonText: 'Exit',
  confirmButtonText:  'Accept',
}).then((result) => {
  if (result.value) {
			$('#checkbox-toggle').prop('checked',true);
  }
})
})
//* Alert end */



////////////////////////////////////////////////////////////////////////////////////



//* WHEEL HAPPY */
var value = 0;
var countClicked = 0;
var clicked = false;
function getPosition(position,rank) {
	var whelltext = $('.wheel-hap').text();
	var whelltextw = $('.wheel-hape').text();
	if(rank == 2){
	if (position <= 105 & position > 75)  {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: '500 free QR code',
			})
		}
		else if (position <= 75 & position > 45) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: whelltextw+' 5 BFF',
			})
		}
		else if (position <= 45 & position > 15) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: '750 free QR code',
			})
		}
		else if (position <= 15 & position > 345) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: whelltextw+' 5 BFF',
			})
		}
		else if (position <= 345 & position > 315) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: '1000 free QR code',
			})
		} else if (position <= 315  & position > 285) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: whelltextw+' 5 BFF',
			})
		} else if (position <= 285  & position > 255) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: '-50% refund of QR code commission  (1 month)',
			})
		} else if (position <= 255 & position > 225) {
			$('.overlay_popup, .sign').hide();
			Gift.fire({
				text: whelltextw+' 5 BFF',
			})
		}else if (position <= 225 & position > 195) {
				$('.overlay_popup, .sign').hide();
				Gift.fire({
					text: '-30% refund of QR code commission  (2 month)',
				})
			}else if (position <= 195 & position > 165) {
				$('.overlay_popup, .sign').hide();
				Gift.fire({
					text: whelltextw+' 5 BFF',
				})
			}
			else if (position <= 165 & position > 135) {
				$('.overlay_popup, .sign').hide();
				Gift.fire({
					text: '-25% refund of QR code commission  (3 month)',
				})
			}	else if (position <= 135 & position > 105) {
				$('.overlay_popup, .sign').hide();
				Gift.fire({
					text: whelltextw+' 5 BFF',
				})
			}
	} else{
		$('.overlay_popup, .sign').hide();
		Gift.fire({
			text: whelltext,
			preConfirm: () => {
				$('.overlay_popup, .sign').hide();
				location.hash = '#login';
			}
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
						getPosition(value % 360,2);
				}, 5000);
		}
		clicked = true;
	})
})

$('.wheel-franchise').click(function () {
	$('#wheel-check-franchise').submit(function (e) {
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
						getPosition(value % 360,2);
				}, 5000);
		}
		clicked = true;
	})
})



$('.wheel-invest').click(function () {
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
						getPosition(value % 360,1);
				}, 5000);
		}
		clicked = true;
})




//* WHEEL HAPPY  End*/

///////////////////////////////////////////////////////////////////////////////////////////

//* Select*/

//////* LANG *///////////


$(".default_option").click(function(){
  $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function(){
	var currentele = $(this).html();
	$(".default_option li").html(currentele);
	let setLang =	$(currentele).attr('rel');
	document.cookie = "lang="+setLang;
	$(this).parents(".select_wrap").removeClass("active");
	document.location.reload(true);
})



/////* LANG  END*//////




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