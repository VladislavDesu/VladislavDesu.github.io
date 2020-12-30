"use strict"

function createPortfolioCards(cards) {
   const portfolioList = document.querySelector(".portfolio__list");
   const portfolioTemplate = document.querySelector("#portfolio-item").content;
   const portfolioSource = portfolioTemplate.querySelector("picture source");
   const portfolioPhoto = portfolioTemplate.querySelector(".portfolio__photo");
   const portfolioName = portfolioTemplate.querySelector(".portfolio__name");
   const portfolioLink = portfolioTemplate.querySelector(".portfolio__link");

   portfolioSource.srcset = cards.webp;
   portfolioPhoto.src = cards.photo;
   portfolioPhoto.alt = "A photo of the " + cards.name + " site";
   portfolioName.textContent = cards.name;
   portfolioLink.href = cards.link;
   const copyContent = portfolioTemplate.cloneNode(true);
   portfolioList.appendChild(copyContent);
}

const portfolioCards = [{
      name: "Alexis",
      image: "images/alexis.png",
      webp: "images/alexis.webp",
      link: "portfolio-sites/alexis/"
   },

   {
      name: "Pulse",
      image: "images/pulse.png",
      webp: "images/pulse.webp",
      link: "portfolio-sites/pulse/"
   },

   {
      name: "Sedona",
      image: "images/sedona.png",
      webp: "images/sedona.webp",
      link: "portfolio-sites/sedona/"
   },

   {
      name: "Mogo",
      image: "images/mogo.png",
      webp: "images/mogo.webp",
      link: "portfolio-sites/mogo/"
   },

   {
      name: "Cat Energy",
      image: "images/cat-energy.png",
      webp: "images/cat-energy.webp",
      link: "portfolio-sites/cat-energy/"
   },

   {
      name: "Gllacy",
      image: "images/gllacy.png",
      webp: "images/gllacy.webp",
      link: "portfolio-sites/gllacy/"
   },

   {
      name: "Misocial",
      image: "images/misocial.png",
      webp: "images/misocial.webp",
      link: "portfolio-sites/misocial/"
   },

   {
      name: "Nerds",
      image: "images/nerds.png",
      webp: "images/nerds.webp",
      link: "portfolio-sites/nerds/"
   },

   {
      name: "Borodinski",
      image: "images/borodinski.png",
      webp: "images/borodinski.webp",
      link: "portfolio-sites/borodinski/"
   },

   {
      name: "Covid",
      image: "images/covid.png",
      webp: "images/covid.webp",
      link: "portfolio-sites/covid/"
   },

   {
      name: "Project One",
      image: "images/project-one.png",
      webp: "images/project-one.webp",
      link: "portfolio-sites/project-one/"
   },

   {
      name: "Styles Conference",
      image: "images/styles-conference.png",
      webp: "images/styles-conference.webp",
      link: "portfolio-sites/styles-conference/"
   },

   {
      name: "Mycompany",
      image: "images/mycompany.png",
      webp: "images/mycompany.webp",
      link: "portfolio-sites/mycompany/"
   },

   {
      name: "Kvast",
      image: "images/kvast.png",
      webp: "images/kvast.webp",
      link: "portfolio-sites/kvast/"
   },
];

const portfolio = document.querySelector("#portfolio");
const portfolioList = portfolio.querySelector(".portfolio__list");
const portfolioBtnMore = portfolio.querySelector(".portfolio__btn-more");
const portfolioBtnLess = portfolio.querySelector(".portfolio__btn-less");
let portfolioCardsLen = portfolioCards.length;
let maxItems = 3;

portfolioCards.slice(0, maxItems).forEach((i) => {
   createPortfolioCards(i);
});

// portfolioBtnMore.addEventListener("click", (e) => {
//    e.preventDefault();

//    if (maxItems >= portfolioCardsLen - 3) {
//       portfolioBtnMore.style.display = "none";
//       portfolioBtnLess.style.display = "block";
//    }

//    portfolioCards.slice(maxItems, maxItems + 3).forEach((i) => {
//       createPortfolioCards(i);
//       maxItems++;
//    });
// });

// portfolioBtnLess.addEventListener("click", (e) => {
//    e.preventDefault();

//    if (maxItems >= 7) {
//       if (maxItems % 3 === 2) {
//          for (let i = 1; i <= 2; i++) {
//             maxItems--;
//             portfolioList.childNodes[maxItems].style.display = "none";
//          }
//       } else if (maxItems % 3 === 0) {
//          for (let i = 1; i <= 3; i++) {
//             maxItems--;
//             portfolioList.childNodes[maxItems].style.display = "none";
//          }
//       } else if (maxItems % 3 === 1) {
//          for (let i = 1; i <= 1; i++) {
//             maxItems--;
//             portfolioList.childNodes[maxItems].style.display = "none";
//          }
//       }
//    } else {
//       portfolioBtnLess.style.display = "none";
//       portfolioBtnMore.style.display = "block";
//    }
// });