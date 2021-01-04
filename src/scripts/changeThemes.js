"use strict";

const themeBtn = document.querySelector(".theme__btn");
const body = document.querySelector("#home");

themeBtn.addEventListener("click", (e) => {
   e.preventDefault();
   themeBtn.classList.toggle("theme__btn--light");
   body.classList.toggle("portfolio-theme--dark");
});