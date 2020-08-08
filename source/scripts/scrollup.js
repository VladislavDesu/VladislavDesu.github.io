"use strict";

const scrollUp = document.querySelector(".scrollup");


window.addEventListener("scroll", (e) => {
   e.preventDefault();

   if (window.pageYOffset > 100) {
      scrollUp.classList.add("scrollup--show");
      scrollUp.classList.remove("scrollup--hide");
   } else {
      scrollUp.classList.add("scrollup--hide");
      scrollUp.classList.remove("scrollup--show");
   }
});

scrollUp.addEventListener("click", (e) => {
   e.preventDefault();

   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
});