"use strict";

const $ = require("jquery");

function createPortfolioCards(cards) {
   const portfolioList = document.querySelector(".portfolio__list");
   const portfolioTemplate = document.querySelector("#portfolio-item").content;
   const portfolioSource = portfolioTemplate.querySelector("picture source");
   const portfolioPhoto = portfolioTemplate.querySelector(".portfolio__photo");
   const portfolioName = portfolioTemplate.querySelector(".portfolio__name");
   const portfolioLink = portfolioTemplate.querySelector(".portfolio__link");
   const copyInput = portfolioTemplate.querySelector(".portfolio__input");
   const portfolioGithub = portfolioTemplate.querySelector(".portfolio__link--github");
   const domain = "meportfolio.website";

   portfolioSource.srcset = cards.webp;
   portfolioPhoto.src = cards.image;
   portfolioPhoto.alt = "Photo of the " + cards.name + " site";
   portfolioName.textContent = cards.name;
   portfolioLink.href = cards.link;
   portfolioGithub.href = cards.github;
   copyInput.value = domain + cards.link;
   const copyContent = portfolioTemplate.cloneNode(true);
   portfolioList.appendChild(copyContent);
}

function shareBtns() {
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
   }
}

const portfolioCards = [
   {
      name: "Wordpress Intensive",
      image: "/images/wordpress-intensive.png",
      webp: "/images/wordpress-intensive.webp",
      link: "/portfolio-sites/wordpress-intensive/",
      github: "https://github.com/VladislavDesu/wordpress-intensive",
   },

   {
      name: "Uber Partners",
      image: "/images/uber-partners.png",
      webp: "/images/uber-partners.webp",
      link: "/portfolio-sites/uber-partners/",
      github: "https://github.com/VladislavDesu/uber-partners",
   },

      {
      name: "Timbler",
      image: "/images/timbler.png",
      webp: "/images/timbler.webp",
      link: "/portfolio-sites/timbler/",
      github: "https://github.com/VladislavDesu/timbler",
   },

   {
      name: "Alexis",
      image: "/images/alexis.png",
      webp: "/images/alexis.webp",
      link: "/portfolio-sites/alexis/",
      github: "https://github.com/VladislavDesu/alexis",
   },

   {
      name: "Pulse",
      image: "/images/pulse.png",
      webp: "/images/pulse.webp",
      link: "/portfolio-sites/pulse/",
      github: "https://github.com/VladislavDesu/pulse",
   },

   {
      name: "Sedona",
      image: "/images/sedona.png",
      webp: "/images/sedona.webp",
      link: "/portfolio-sites/sedona/",
      github: "https://github.com/VladislavDesu/sedona",
   },

   {
      name: "Mogo",
      image: "/images/mogo.png",
      webp: "/images/mogo.webp",
      link: "/portfolio-sites/mogo/",
      github: "https://github.com/VladislavDesu/mogo",
   },

   {
      name: "Cat Energy",
      image: "/images/cat-energy.png",
      webp: "/images/cat-energy.webp",
      link: "/portfolio-sites/cat-energy/",
      github: "https://github.com/VladislavDesu/cat-energy",
   },

   {
      name: "Gllacy",
      image: "/images/gllacy.png",
      webp: "/images/gllacy.webp",
      link: "/portfolio-sites/gllacy/",
      github: "https://github.com/VladislavDesu/gllacy",
   },

   {
      name: "Misocial",
      image: "/images/misocial.png",
      webp: "/images/misocial.webp",
      link: "/portfolio-sites/misocial/",
      github: "https://github.com/VladislavDesu/misocial",
   },

   {
      name: "Nerds",
      image: "/images/nerds.png",
      webp: "/images/nerds.webp",
      link: "/portfolio-sites/nerds/",
      github: "https://github.com/VladislavDesu/nerds",
   },

   {
      name: "Borodinski",
      image: "/images/borodinski.png",
      webp: "/images/borodinski.webp",
      link: "/portfolio-sites/borodinski/",
      github: "https://github.com/VladislavDesu/borodinski",
   },

   {
      name: "Covid",
      image: "/images/covid.png",
      webp: "/images/covid.webp",
      link: "/portfolio-sites/covid/",
      github: "https://github.com/VladislavDesu/covid",
   },

   {
      name: "Project One",
      image: "/images/project-one.png",
      webp: "/images/project-one.webp",
      link: "/portfolio-sites/project-one/",
      github: "https://github.com/VladislavDesu/project-one",
   },

   {
      name: "Styles Conference",
      image: "/images/styles-conference.png",
      webp: "/images/styles-conference.webp",
      link: "/portfolio-sites/styles-conference/",
      github: "https://github.com/VladislavDesu/styles-conference",
   },

   {
      name: "Mycompany",
      image: "/images/mycompany.png",
      webp: "/images/mycompany.webp",
      link: "/portfolio-sites/mycompany/",
      github: "https://github.com/VladislavDesu/mycompany",
   },

   {
      name: "Kvast",
      image: "/images/kvast.png",
      webp: "/images/kvast.webp",
      link: "/portfolio-sites/kvast/",
      github: "https://github.com/VladislavDesu/kvast",
   },
];

const portfolioCardsLen = portfolioCards.length;
const portfolioItems = 0;
const maxItems = 3;

let minPortfolioItems = maxItems;
let maxPortfolioItems = portfolioCardsLen;

portfolioCards.slice(portfolioItems, minPortfolioItems).forEach((i) => {
   createPortfolioCards(i);
});

const portfolio = document.querySelector("#portfolio");
const portfolioBtn = portfolio.querySelector(".portfolio__btn");

portfolioBtn.addEventListener("click", (e) => {
   portfolioCards.slice(minPortfolioItems, maxPortfolioItems).forEach((i) => {
      createPortfolioCards(i);
      minPortfolioItems++;
   });

   if (minPortfolioItems === maxPortfolioItems) {
      portfolioBtn.style.display = "none";
   }

   shareBtns();
});

shareBtns();
