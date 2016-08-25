"use strict";

const $ = require('jquery');
// var $window = $(window);

$('.dropdown-button').on('click', function() {
  console.log('yo');
  $('.dropdown-nav').toggleClass('dropdown-nav-update');
  $('.dropdown-button').toggleClass('dropdown-button-update');
  $('.dropdown-list').toggleClass('dropdown-list-update');
});

$('.super-button').on('click', function() {
  $('.dropdown-nav').toggleClass('dropdown-nav-update');
  $('.dropdown-button').toggleClass('dropdown-button-update');
  $('.dropdown-list').toggleClass('dropdown-list-update');
});




$(window).on("load, resize", function() {
  var viewportWidth = $(window).width();
  if (viewportWidth < 700) {
    $('.dropdown-nav').removeClass('dropdown-nav-update');
    $('.dropdown-button').removeClass('dropdown-button-update');
    $('.dropdown-list').removeClass('dropdown-list-update');
  }
});
