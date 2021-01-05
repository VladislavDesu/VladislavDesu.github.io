"use strict";

const $ = require("jquery");

$(window).on('load', () => {
   setTimeout(() => {
      $(".loader").fadeOut(1000, () => {
         $("body").removeClass("loading");
      });
   }, 1500);
});