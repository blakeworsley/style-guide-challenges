"use strict";

const $ = require('jquery');

$('.drop-down-menu-nav').on('click', function() {
  $('.drop-down-menu-nav').toggleClass('drop-down-menu-nav-show');
  $('.drop-down-menu-nav').toggleClass('drop-down-menu-list-show');
});

$('.super-button').on('click', function() {
  $('.drop-down-menu-nav').toggleClass('drop-down-menu-nav-show');
  $('.drop-down-menu-list').toggleClass('drop-down-menu-list-show');
});
