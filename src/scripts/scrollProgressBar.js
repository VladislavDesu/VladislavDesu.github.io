"use strict";

window.addEventListener("scroll", (e) => {
   const progressBar = document.querySelector("#progressBar");
   const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   const scrolled = (winScroll / height) * 100;
   progressBar.style.width = scrolled + "%";
});