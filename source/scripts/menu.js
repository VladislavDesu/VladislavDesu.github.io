const nav = document.querySelector(".navigation");
const navBtn = nav.querySelector(".navigation__btn");

navBtn.addEventListener("click", (e) => {
   navBtn.classList.toggle("navigation__btn--closed");
});