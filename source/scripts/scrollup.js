"use strict";

const scrollUp = document.querySelector(".scroll-up");


window.addEventListener("scroll", (e) => {
   e.preventDefault();

   if (window.pageYOffset > 100) {
      scrollUp.classList.add("opacity-on");
      scrollUp.classList.remove("opacity-off");
   } else {
      scrollUp.classList.add("opacity-off");
      scrollUp.classList.remove("opacity-on");
   }
});

scrollUp.addEventListener("click", (e) => {
   e.preventDefault();

   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
});