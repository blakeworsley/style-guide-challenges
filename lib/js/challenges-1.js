"use strict";

const $ = require('jquery');

$('.drop-down-menu-button').on('click', function() {
  $('.drop-down-menu-nav').toggleClass('drop-down-menu-nav-show');
});

$('.super-button').on('click', function() {
  $('.drop-down-menu-nav').toggleClass('drop-down-menu-nav-show');
});
