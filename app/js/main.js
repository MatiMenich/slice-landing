'use strict';

$('.btn-menu').click(function(){
  $(this).toggleClass('open');
  $('.sidemenu').toggleClass('sidemenu-open');
  $('.sidemenu-backdrop').toggleClass('visible');
});

$('.sidemenu-backdrop').click(function(){
  $(this).toggleClass('visible');
  $('.btn-menu').toggleClass('open');
  $('.sidemenu').toggleClass('sidemenu-open');
});

new Swiper ('.swiper-container', {
  loop: true,
  autoplay: 9000,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});

// Everyone
if($('.hero-restaurant').length === 0){
  window.sr = new ScrollReveal().reveal('.benefit').reveal('.phone').reveal('.phone');

  $('.hero-main').parallax({
    imageSrc: 'images/hero-main.jpg',
    position: 'left',
    naturalWidth: '1920',
    naturalHeight: '1280'
  });

  $('.restaurant').parallax({
    imageSrc: 'images/restaurant.jpg',
    position: 'center',
    naturalWidth: '1920',
    naturalHeight: '1280'
  });

  var navbarOpen = false;
  var startingSection = $('#how_it_works');
  var media = $('video');
  var wHeight = $(window).height();
  var startingOffset = 70;

  $(window).on('scroll', function() {
    var scrollPosition = scrollY || pageYOffset;

    if (scrollPosition >= startingSection.position().top && !navbarOpen) {
      navbarOpen = true;
      $('#navbar-fixed').removeClass('move-up');
      $('#navbar-mobile').removeClass('move-up');
    }

    if (scrollPosition < startingSection.position().top && navbarOpen) {
      navbarOpen = false;
      $('#navbar-fixed').addClass('move-up');
      $('#navbar-mobile').addClass('move-up');
    }

    if (scrollPosition+wHeight+startingOffset >= $('#quote').position().top+wHeight) {
      $('.line').addClass('active');
    }

    if ( scrollPosition+wHeight+startingOffset >= $('.benefit-2').position().top ) {
      media[0].play();
    }

    if ( scrollPosition+wHeight+startingOffset >= $('.benefit-3').position().top ) {
      media[1].play();
    }

    if ( scrollPosition+wHeight+startingOffset >= $('.restaurant').position().top ) {
      media[2].play();
    }
  });
}


// Restaurant
if($('.hero-restaurant').length > 0){
  window.sr = new ScrollReveal()
    .reveal('.image')
    .reveal('.col-sm-4', 200)
    .reveal('.image-left', {
      easing      : 'cubic-bezier(.87,-.41,.19,1.44)',
      duration    : 600,
      origin      : 'left',
    })
    .reveal('.image-right', {
      easing      : 'cubic-bezier(.87,-.41,.19,1.44)',
      duration    : 600,
      origin      : 'right',
    });

  $('.hero-restaurant').parallax({
    imageSrc: 'images/hero-restaurant.jpg',
    position: 'center',
    naturalWidth: '1920',
    naturalHeight: '1280'
  });

  $('.pos-integrations').parallax({
    imageSrc: 'images/busy-bar.jpg',
    position: 'center',
    naturalWidth: '1920',
    naturalHeight: '1440'
  });

  var navbarOpen = false;

  var startingSection = $('#benefits-restaurant');

  $(window).on('scroll', function() {
    var scrollPosition = scrollY || pageYOffset;

    if (scrollPosition >= startingSection.position().top && !navbarOpen) {
      navbarOpen = true;
      $('#navbar-fixed').removeClass('move-up');
      $('#navbar-mobile').removeClass('move-up');
    }

    if (scrollPosition < startingSection.position().top && navbarOpen) {
      navbarOpen = false;
      $('#navbar-fixed').addClass('move-up');
      $('#navbar-mobile').addClass('move-up');
    }
  });
}


