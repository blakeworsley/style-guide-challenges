"use strict";

const $ = require('jquery');

$('.dropdown-button').on('click', function() {
  console.log('yo');
  $('.dropdown-header').toggleClass('dropdown-header-update');
  $('.dropdown-nav').toggleClass('dropdown-nav-update');
  $('.dropdown-ul').toggleClass('dropdown-ul-update');
});

$('.super-button').on('click', function() {
  $('.dropdown-nav').toggleClass('dropdown-nav-show');
});
