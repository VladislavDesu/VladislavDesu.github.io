"use strict";

const $ = require("jquery");

const themeBtn = document.querySelector(".theme__btn");
const body = document.querySelector("#home");

themeBtn.addEventListener("click", (e) => {
   e.preventDefault();
   themeBtn.classList.toggle("theme__btn--light");
   body.classList.toggle("portfolio-theme--dark");

   localStorage.setItem("themeNight", themeBtn.classList.contains("theme__btn--light"));
});

localStorage.themeNight === "true" ? $('.theme__btn').addClass("theme__btn--light"): '';
localStorage.themeNight === "true" ? $('#home').removeClass("portfolio-theme--dark"): '';