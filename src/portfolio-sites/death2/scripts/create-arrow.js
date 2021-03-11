"use strict"

function createArrow(element, count, styles = {
   w: "15px",
   h: "8px",
   ml: "0px",
   t: "auto",
   r: "auto"
}) {
   const arrowTemp = document.querySelector("#arrow-temp").content;
   const arrowList = arrowTemp.querySelector(".arrow-list");
   const arrow = arrowList.querySelector(".arrow");

   arrowList.innerHTML = "";
   arrowList.style.marginLeft = styles.mlList;
   arrowList.style.position = "absolute";
   arrowList.style.top = styles.t;
   arrowList.style.right = styles.r;

   for (let i = 0; i < count; i++) {
      arrow.style.width = styles.w;
      arrow.style.height = styles.h;
      arrow.style.marginLeft = styles.ml;
      arrow.style.opacity = "0.2";
      const cloneArrow = arrow.cloneNode(true);
      arrowList.appendChild(cloneArrow);
   };

   const cloneArrow = arrowList.cloneNode(true);
   element.appendChild(cloneArrow);
}

const customersAlertBtn = document.querySelector(".customers-alert__btn span");
const ngnUp = document.querySelector(".ngn__up span");
const ngnAwaits = document.querySelector(".ngn__awaits span");
const howRegister = document.querySelector(".how-to-use__item--register");
const howDeposit = document.querySelector(".how-to-use__item--deposit");
const howOffer = document.querySelector(".how-to-use__item--offer");

createArrow(customersAlertBtn, 4, {
   w: "15px",
   h: "8px",
   ml: "-4px",
   t: "19px",
   r: "14px"
});

createArrow(ngnUp, 6, {
   w: "33px",
   h: "18px",
   ml: "-10px",
   t: "10px",
   r: "-200px"
});

createArrow(ngnAwaits, 2, {
   w: "33px",
   h: "18px",
   ml: "-10px",
   t: "10px",
   r: "280px"
});

createArrow(howRegister, 3, {
   w: "59px",
   h: "33px",
   ml: "-20px",
   t: "13px",
   r: "-360px"
});

createArrow(howDeposit, 3, {
   w: "29px",
   h: "16px",
   ml: "-10px",
   t: "75px",
   r: "455px"
});

createArrow(howOffer, 3, {
   w: "40px",
   h: "22px",
   ml: "-14px",
   t: "40px",
   r: "-235px"
});

const arrow = document.querySelectorAll(".arrow");
let time = 0;

arrow.forEach((e) => {
   time += 100;
   setInterval(() => {
      e.classList.add("arrow-show");
   }, time);
})