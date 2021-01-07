"use strict";

const $ = require("jquery");

window.addEventListener("scroll", () => {
   if (pageYOffset > 1000) {
      $(".arrow--btn-up").fadeIn(500);
   } else {
      $(".arrow--btn-up").fadeOut(500);
   }
});