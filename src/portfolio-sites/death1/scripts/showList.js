(function () {
   "use strict";

   const inputSearch = document.querySelector("#catalog-search");
   const inputDropbox = document.querySelector("#catalog-dropbox");
   const searchList = document.querySelector(".catalog__search-list");
   const dropboxList = document.querySelector(".catalog__dropbox-list");

   function showList(input, list) {
      if (input.value.length > 0) {
         list.style.display = "block";
      } else {
         list.style.display = "none";
      }
   }

   function changeListValue(event, input, list, itemClass) {
      let target = event.target;
      if (target.classList.contains(`${itemClass}`)) {
         input.value = event.path[0].innerText;
         list.style.display = "none";
      }
   }

   window.addEventListener("click", (e) => {
      searchList.style.display = "none";
      dropboxList.style.display = "none";
   });

   window.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
         searchList.style.display = "none";
         dropboxList.style.display = "none";
      }
   });

   inputSearch.addEventListener("input", (e) => {
      e.preventDefault();
      showList(inputSearch, searchList);
   });

   inputDropbox.addEventListener("input", (e) => {
      e.preventDefault();
      showList(inputDropbox, dropboxList);
   });

   searchList.addEventListener("click", e => {
      changeListValue(e, inputSearch, searchList, "catalog__search-item");
   });

   dropboxList.addEventListener("click", e => {
      changeListValue(e, inputDropbox, dropboxList, "catalog__dropbox-item");
   });
})();