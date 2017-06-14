//nav-open
$(function () {
  $('.burger-icon').click(function () {
      $('body').toggleClass('js-nav-open');
    })
    , $('nav a').click(function () {
      $('body').removeClass('js-nav-open');
    });
});
//nav-open
$(function () {
  $('.callback').click(function () {
      $('body').toggleClass('ShowPopUpForm');
    })
    , $('.ShowPopUpForm i').click(function () {
      $('body').removeClass('ShowPopUpForm');
    });
});


//hero-slider
$('.hero-slider').slick({
  dots: true
  , arrows: true
  , infinite: true
  , speed: 500
  , fade: true
  , cssEase: 'linear'
  , responsive: [
    {
      breakpoint: 992
      , settings: {
        arrows: false
        , dots: true
      }
        }
    ]
});


//scheme-slider
$('.scheme-slider').slick({
  dots: true
  , arrows: true
  , infinite: false
  , speed: 200
  , fade: true
  , cssEase: 'ease'
});


//reviews-slider
$('.reviews-slider').slick({
  //  dots: false,
  arrows: true
  , infinite: false
  , speed: 200
  , fade: true
  , cssEase: 'ease'
  , responsive: [
    {
      breakpoint: 480
      , settings: {
        dots: true
      }
        }
    ]
});


//fixed-nav
var locality = $('nav').offset().top;
$(window).scroll(function () {
  if ($(this).width() >= 992) {
    if ($(window).scrollTop() >= (locality + 0)) {
      $('nav').addClass('js-nav-fixed');
    }
    else {
      $('nav').removeClass('js-nav-fixed');
    }
  }
});


//services-tabs
$(function () {
  $("#services-tabs").tabs();
});


//scroll
$(document).ready(function () {
  $('nav a').click(function () {
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top
      }, 500); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});


//jcf
$(function () {
  	jcf.replaceAll();
});
