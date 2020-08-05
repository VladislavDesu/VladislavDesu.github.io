"use strict";

const cards = [
   {
      img: "app/images/cards/sedona.png",
      title: "Sedona",
      desc: "",
      link: "/sedona",
   },
   {
      img: "app/images/cards/gllacy.png",
      title: "Gllacy",
      desc: "",
      link: "/gllacy",
   },
   {
      img: "app/images/cards/nerds.png",
      title: "Nerds",
      desc: "",
      link: "/nerds",
   },
   {
      img: "app/images/cards/catenergy.png",
      title: "Cat Energy",
      desc: "",
      link: "/cat-energy",
   },
   {
      img: "app/images/cards/covid.png",
      title: "COVID-19",
      desc: "",
      link: "/covid-19",
   },
   {
      img: "app/images/cards/mogo.png",
      title: "MoGo",
      desc: "",
      link: "/mogo",
   },
   {
      img: "app/images/cards/misocial.png",
      title: "Misocial",
      desc: "",
      link: "/misocial",
   },
   {
      img: "app/images/cards/kvast.png",
      title: "Kvast",
      desc: "",
      link: "/kvast",
   },
   {
      img: "app/images/cards/conference.png",
      title: "Styles Conference",
      desc: "",
      link: "/styles-conference",
   },
   {
      img: "app/images/cards/company.png",
      title: "My Company",
      desc: "",
      link: "/mycompany",
   },
];

const clonedCard = (index) => {
   const cardList = document.querySelector(".card-list");
   const templateContent = document.querySelector("#list-item-card").content;
   const cardTitle = templateContent.querySelector(".card-title");
   const cardImg = templateContent.querySelector(".card-img-top");
   const cardText = templateContent.querySelector(".card-text");
   const cardBtn = templateContent.querySelector(".btn");

   cardTitle.textContent = cards[index].title;
   cardImg.src = cards[index].img;
   cardImg.alt = "Изображение сайта " + cards[index].title.toLowerCase();
   cardText.textContent = cards[index].desc;
   cardBtn.href = cards[index].link;

   const cardCloned = templateContent.cloneNode(true);
   cardList.appendChild(cardCloned);
};

cards.forEach((index) => clonedCard(cards.indexOf(index)));
