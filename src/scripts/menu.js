const header = document.querySelector(".header");

header.classList.remove("header--no-js");

const headerBtn = header.querySelector(".header__btn-menu");
const headerList = header.querySelector(".header__list");
const headerNav = header.querySelector(".header__navigation");

headerBtn.addEventListener("click", (e) => {
   e.preventDefault();
   headerBtn.classList.toggle("header__btn-menu--open");
   headerList.classList.toggle("header__list--closed");
   headerNav.classList.toggle("header__navigation--page-down");
});