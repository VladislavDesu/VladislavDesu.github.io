"use strict";

const cards = [
   {
      img: {
         webp: "app/images/webp/pulse.webp",
         png: "app/images/pulse.png"
      },
      title: "Pulse",
      desc: "",
      link: "/pulse",
   },
   {
      img: {
         webp: "app/images/webp/alexis.webp",
         png: "app/images/alexis.png"
      },
      title: "Alexis",
      desc: "",
      link: "/alexis",
   },
   {
      img: {
         webp: "app/images/webp/project-two.webp",
         png: "app/images/project-two.png"
      },
      title: "Project Two",
      desc: "",
      link: "/project-two",
   },
   {
      img: {
         webp: "app/images/webp/project-one.webp",
         png: "app/images/project-one.png"
      },
      title: "Project One",
      desc: "",
      link: "/project-one",
   },
   {
      img: {
         webp: "app/images/webp/sedona.webp",
         png: "app/images/sedona.png"
      },
      title: "Sedona",
      desc: "",
      link: "/sedona",
   },
   {
      img: {
         webp: "app/images/webp/gllacy.webp",
         png: "app/images/gllacy.png"
      },
      title: "Gllacy",
      desc: "",
      link: "/gllacy",
   },
   {
      img: {
         webp: "app/images/webp/nerds.webp",
         png: "app/images/nerds.png"
      },
      title: "Nerds",
      desc: "",
      link: "/nerds",
   },
   {
      img: {
         webp: "app/images/webp/borodinski.webp",
         png: "app/images/borodinski.png"
      },
      title: "Borodinski",
      desc: "",
      link: "/borodinski",
   },
   {
      img: {
         webp: "app/images/webp/catenergy.webp",
         png: "app/images/catenergy.png"
      },
      title: "Cat Energy",
      desc: "",
      link: "/cat-energy",
   },
   {
      img: {
         webp: "app/images/webp/covid.webp",
         png: "app/images/covid.png"
      },
      title: "COVID-19",
      desc: "",
      link: "/covid-19",
   },
   {
      img: {
         webp: "app/images/webp/mogo.webp",
         png: "app/images/mogo.png"
      },
      title: "MoGo",
      desc: "",
      link: "/mogo",
   },
   {
      img: {
         webp: "app/images/webp/misocial.webp",
         png: "app/images/misocial.png"
      },
      title: "Misocial",
      desc: "",
      link: "/misocial",
   },
   {
      img: {
         webp: "app/images/webp/kvast.webp",
         png: "app/images/kvast.png"
      },
      title: "Kvast",
      desc: "",
      link: "/kvast",
   },
   {
      img: {
         webp: "app/images/webp/conference.webp",
         png: "app/images/conference.png"
      },
      title: "Styles Conference",
      desc: "",
      link: "/styles-conference",
   },
   {
      img: {
         webp: "app/images/webp/company.webp",
         png: "app/images/company.png"
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
