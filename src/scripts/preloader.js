"use strict";

const $ = require("jquery");

$(window).on("load", () => {
   $(".loader").fadeOut(500, () => {
      $("body").removeClass("loading");
   });
});