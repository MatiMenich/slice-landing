"use strict";if($(".btn-menu").click(function(){$(this).toggleClass("open"),$(".sidemenu").toggleClass("sidemenu-open"),$(".sidemenu-backdrop").toggleClass("visible")}),$(".sidemenu-backdrop").click(function(){$(this).toggleClass("visible"),$(".btn-menu").toggleClass("open"),$(".sidemenu").toggleClass("sidemenu-open")}),0===$(".hero-restaurant").length){window.sr=(new ScrollReveal).reveal(".benefit").reveal(".phone").reveal(".phone"),new Swiper(".swiper-container",{loop:!0,pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev"}),$(".hero-main").parallax({imageSrc:"images/hero-main.jpg",position:"left",naturalWidth:"1920",naturalHeight:"1280"}),$(".restaurant").parallax({imageSrc:"images/restaurant.jpg",position:"center",naturalWidth:"1920",naturalHeight:"1280"});var navbarOpen=!1,startingSection=$("#how_it_works"),media=$("video"),wHeight=$(window).height();$(window).on("scroll",function(){var e=scrollY||pageYOffset;e>=startingSection.position().top&&!navbarOpen&&(navbarOpen=!0,$("#navbar-fixed").removeClass("move-up"),$("#navbar-mobile").removeClass("move-up")),e<startingSection.position().top&&navbarOpen&&(navbarOpen=!1,$("#navbar-fixed").addClass("move-up"),$("#navbar-mobile").addClass("move-up")),e+wHeight+60>=$(".benefit-2").position().top&&media[0].play(),e+wHeight+60>=$(".benefit-3").position().top&&media[1].play(),e+wHeight+60>=$(".restaurant").position().top&&media[2].play()})}if($(".hero-restaurant").length>0){window.sr=(new ScrollReveal).reveal(".image").reveal(".col-sm-4",200),$(".hero-restaurant").parallax({imageSrc:"images/hero-restaurant.jpg",position:"center",naturalWidth:"1920",naturalHeight:"1280"});var navbarOpen=!1,startingSection=$("#benefits-restaurant");$(window).on("scroll",function(){var e=scrollY||pageYOffset;e>=startingSection.position().top&&!navbarOpen&&(navbarOpen=!0,$("#navbar-fixed").removeClass("move-up"),$("#navbar-mobile").removeClass("move-up")),e<startingSection.position().top&&navbarOpen&&(navbarOpen=!1,$("#navbar-fixed").addClass("move-up"),$("#navbar-mobile").addClass("move-up"))})}