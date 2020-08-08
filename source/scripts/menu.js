const mainNav = document.querySelector(".main-nav");
const btnClose = mainNav.querySelector(".main-nav__btn");

btnClose.addEventListener("click", (e) => {
   btnClose.classList.toggle("main-nav__btn--closed");
});