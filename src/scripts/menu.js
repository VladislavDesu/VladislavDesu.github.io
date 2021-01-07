"use strict";

const $ = require("jquery");

$(".header__btn-menu").click(() => {
   $(".header__btn-menu").toggleClass("header__btn-menu--open");
   $(".header__list").slideToggle("slow").toggleClass("header__list--closed");
   $(".header__link").removeClass("wow fadeInRight").attr("style", "");
});