"use strict"

const menu = document.querySelector(".menu");
const menuBtn = menu.querySelector(".menu__btn");
const nav = menu.querySelector(".navigation");
const navBtn = nav.querySelector(".navigation__btn");
const logo = nav.querySelector(".logo__link");
const navCatalog = nav.querySelector(".navigation__link-catalog");
const navSignIn = nav.querySelector(".navigation__link-sign-in");
const navCart = nav.querySelector(".navigation__link-cart");
const navComparison = nav.querySelector(".navigation__link-comparison");
const cart = document.querySelector(".cart");
const cartBtn = cart.querySelector(".cart__btn");
const cartPopup = cart.querySelector(".cart__wrapper");
const cartPopupBtn = cartPopup.querySelector(".cart__btn-close");
const catalog = document.querySelector(".catalog");
const catalogBtn = catalog.querySelector(".catalog__btn");
const catalogPopup = catalog.querySelector(".catalog__wrapper");
const catalogPopupBtn = catalog.querySelector(".catalog__btn-close");
const signIn = document.querySelector(".sign-in");
const signInPopup = signIn.querySelector(".sign-in__wrapper");
const signInBtn = signIn.querySelector(".sign-in__btn-close");
const comparison = document.querySelector(".modal-comparison");
const comparisonPopup = comparison.querySelector(".modal-comparison__wrapper");
const comparisonPopupBtn = comparison.querySelector(".modal-comparison__btn-close");
const listCatalog = [catalogBtn, navCatalog];
const listNav = [logo, navBtn];
const listCart = [cartBtn, navCart];

menuBtn.addEventListener("click", (e) => {
   e.preventDefault();
   nav.classList.remove("menu__nav--closed");
   nav.classList.add("menu__nav--opened");
   nav.style.display = "block";
});

for(let i = 0; i < listNav.length; i++) {
   listNav[i].addEventListener("click", (e) => {
      e.preventDefault();
      nav.classList.add("menu__nav--closed");
      nav.classList.remove("menu__nav--opened");
      const displayInterval = setInterval(() => {
         nav.style.display = "none";
         clearInterval(displayInterval);
      }, 400);
   });
}

cartBtn.addEventListener("click", (e) => {
   e.preventDefault();
   cartPopup.classList.remove("cart__wrapper--closed");
   cartPopup.classList.add("cart__wrapper--opened");
   cartPopup.style.display = "block";
});

for(let i = 0; i < listCart.length; i++) {
   listCart[i].addEventListener("click", (e) => {
      e.preventDefault();
      cartPopup.classList.remove("cart__wrapper--closed");
      cartPopup.classList.add("cart__wrapper--opened");
      cartPopup.style.display = "block";
      nav.classList.add("menu__nav--closed");
      nav.classList.remove("menu__nav--opened");
      const displayInterval = setInterval(() => {
         nav.style.display = "none";
         clearInterval(displayInterval);
      }, 400);
   });
}

cartPopupBtn.addEventListener("click", (e) => {
   e.preventDefault();
   cartPopup.classList.add("cart__wrapper--closed");
   cartPopup.classList.remove("cart__wrapper--opened");
   const displayInterval = setInterval(() => {
      cartPopup.style.display = "none";
      clearInterval(displayInterval);
   }, 200);
});

for(let i = 0; i < listCatalog.length; i++) {
   listCatalog[i].addEventListener("click", (e) => {
      e.preventDefault();
      catalogPopup.classList.remove("catalog__wrapper--closed");
      catalogPopup.classList.add("catalog__wrapper--opened");
      catalogPopup.style.display = "block";
      nav.classList.add("menu__nav--closed");
      nav.classList.remove("menu__nav--opened");
      const displayInterval = setInterval(() => {
         nav.style.display = "none";
         clearInterval(displayInterval);
      }, 400);
   });
}

catalogPopupBtn.addEventListener("click", (e) => {
   e.preventDefault();
   catalogPopup.classList.add("catalog__wrapper--closed");
   catalogPopup.classList.remove("catalog__wrapper--opened");
   const displayInterval = setInterval(() => {
      catalogPopup.style.display = "none";
      clearInterval(displayInterval);
   }, 200);
});

navSignIn.addEventListener("click", (e) => {
   e.preventDefault();
   signInPopup.classList.remove("sign-in__wrapper--closed");
   signInPopup.classList.add("sign-in__wrapper--opened");
   signInPopup.style.display = "block";
   nav.classList.add("menu__nav--closed");
   nav.classList.remove("menu__nav--opened");
   const displayInterval = setInterval(() => {
      nav.style.display = "none";
      clearInterval(displayInterval);
   }, 400);
});

signInBtn.addEventListener("click", (e) => {
   e.preventDefault();
   signInPopup.classList.add("sign-in__wrapper--closed");
   signInPopup.classList.remove("sign-in__wrapper--opened");
   const displayInterval = setInterval(() => {
      signInPopup.style.display = "none";
      clearInterval(displayInterval);
   }, 200);
});

navComparison.addEventListener("click", (e) => {
   e.preventDefault();
   comparison.classList.remove("modal-comparison--closed");
   comparisonPopup.classList.remove("modal-comparison__wrapper--closed");
   comparisonPopup.classList.add("modal-comparison__wrapper--opened");
   comparison.style.display = "block";
   comparisonPopup.style.display = "block";
   nav.classList.add("menu__nav--closed");
   nav.classList.remove("menu__nav--opened");
   const displayInterval = setInterval(() => {
      nav.style.display = "none";
      clearInterval(displayInterval);
   }, 400);
});

comparisonPopupBtn.addEventListener("click", (e) => {
   e.preventDefault();
   comparisonPopup.classList.add("modal-comparison__wrapper--closed");
   comparisonPopup.classList.remove("modal-comparison__wrapper--opened");
   const displayInterval = setInterval(() => {
      comparison.style.display = "none";
      comparisonPopup.style.display = "none";
      comparison.classList.add("modal-comparison--closed");
      clearInterval(displayInterval);
   }, 200);
});
