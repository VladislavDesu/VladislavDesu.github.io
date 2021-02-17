"use strict"

document.addEventListener("mousemove", (e) => {
   const star = document.querySelector(".star");
   const man = document.querySelector(".man");
   const ball = document.querySelector(".ball");
   const palmOne = document.querySelector(".palm-one");
   const palmTwo = document.querySelector(".palm-two");

   const speed = star.getAttribute("data-speed");

   const x = (window.innerWidth - e.pageX * speed) / 100;
   const y = (window.innerHeight - e.pageY * speed) / 100;

   star.style.transform = `translateX(${x}px)`;
   man.style.transform = `translateX(${x}px) translateY(${y}px)`;
   ball.style.transform = `translateX(${x}px) translateY(${y}px)`;
   palmOne.style.transform = `translateY(${y}px)`;
   palmTwo.style.transform = `translateY(${y}px)`;
});
