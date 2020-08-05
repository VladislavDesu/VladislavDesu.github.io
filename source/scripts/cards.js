"use strict";

const cards = [
   {
      img: {
         webp: "app/images/cards/sedona.webp",
         png: "app/images/cards/sedona.png"
      },
      title: "Sedona",
      desc: "",
      link: "/sedona",
   },
   {
      img: {
         webp: "app/images/cards/gllacy.webp",
         png: "app/images/cards/gllacy.png"
      },
      title: "Gllacy",
      desc: "",
      link: "/gllacy",
   },
   {
      img: {
         webp: "app/images/cards/nerds.webp",
         png: "app/images/cards/nerds.png"
      },
      title: "Nerds",
      desc: "",
      link: "/nerds",
   },
   {
      img: {
         webp: "app/images/cards/catenergy.webp",
         png: "app/images/cards/catenergy.png"
      },
      title: "Cat Energy",
      desc: "",
      link: "/cat-energy",
   },
   {
      img: {
         webp: "app/images/cards/covid.webp",
         png: "app/images/cards/covid.png"
      },
      title: "COVID-19",
      desc: "",
      link: "/covid-19",
   },
   {
      img: {
         webp: "app/images/cards/mogo.webp",
         png: "app/images/cards/mogo.png"
      },
      title: "MoGo",
      desc: "",
      link: "/mogo",
   },
   {
      img: {
         webp: "app/images/cards/misocial.webp",
         png: "app/images/cards/misocial.png"
      },
      title: "Misocial",
      desc: "",
      link: "/misocial",
   },
   {
      img: {
         webp: "app/images/cards/kvast.webp",
         png: "app/images/cards/kvast.png"
      },
      title: "Kvast",
      desc: "",
      link: "/kvast",
   },
   {
      img: {
         webp: "app/images/cards/conference.webp",
         png: "app/images/cards/conference.png"
      },
      title: "Styles Conference",
      desc: "",
      link: "/styles-conference",
   },
   {
      img: {
         webp: "app/images/cards/company.webp",
         png: "app/images/cards/company.png"
      },
      title: "My Company",
      desc: "",
      link: "/mycompany",
   },
];

const clonedCard = (index) => {
   const cardList = document.querySelector(".card-list");
   const templateContent = document.querySelector("#list-item-card").content;
   const cardTitle = templateContent.querySelector(".card-title");
   const sourceImg = templateContent.querySelector("source");
   const cardImg = templateContent.querySelector(".card-img-top");
   const cardText = templateContent.querySelector(".card-text");
   const cardBtn = templateContent.querySelector(".btn");

   cardTitle.textContent = cards[index].title;
   sourceImg.srcset = cards[index].img.webp;
   cardImg.src = cards[index].img.png;
   cardImg.alt = "Изображение сайта " + cards[index].title.toLowerCase();
   cardText.textContent = cards[index].desc;
   cardBtn.href = cards[index].link;

   const cardCloned = templateContent.cloneNode(true);
   cardList.appendChild(cardCloned);
};

cards.forEach((index) => clonedCard(cards.indexOf(index)));
