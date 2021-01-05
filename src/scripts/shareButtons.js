"use strict";

const $ = require("jquery");

const copyBtn = portfolio.querySelectorAll(".portfolio__link--copy");
const copyInput = portfolio.querySelectorAll(".portfolio__input");


for (let count = 0; count < copyBtn.length; count++) {
   copyBtn[count].addEventListener("click", (e) => {
      e.preventDefault();
      copyInput[count].select();
      document.execCommand("copy");
      $(`.portfolio__tooltip:eq(${count})`).fadeIn(1000);
      setTimeout(() => {
         $(`.portfolio__tooltip:eq(${count})`).fadeOut(1000);
      }, 1500);
   });
};