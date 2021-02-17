(function() {
   "use strict";

let regForm = document.querySelector(".form");
let inputs = regForm.querySelectorAll(".form__input");
let formBtn = regForm.querySelector(".form__submit");
let pravicyCheck = regForm.querySelector("#registration-checkbox");
let checkboxIndicator = regForm.querySelector(".form__checkbox-indicator");
let regName = regForm.querySelector("#registration-name");
let regEmail = regForm.querySelector("#registration-email");
let regPhone = regForm.querySelector("#registration-phone");

if (
   localStorage.getItem("Name") != null &&
   localStorage.getItem("Email") != null &&
   localStorage.getItem("Phone") != null
) {
   regName.value = localStorage.getItem("Name");
   regEmail.value = localStorage.getItem("Email");
   regPhone.value = localStorage.getItem("Phone");

   inputs.forEach((element) => {
      element.classList.add("form__input--autofill");
   });
}

inputs.forEach((element, i) => {
   element.addEventListener("input", (e) => {
      if (element.checkValidity() == true) {
         element.classList.remove("form__input--invalid");
         element.classList.add("form__input--valid");
         element.classList.remove("form__input--autofill");
      } else {
         element.classList.add("form__input--invalid");
         element.classList.remove("form__input--valid");
         element.classList.remove("form__input--autofill");
      }
   });
});

formBtn.addEventListener("click", (e) => {
   e.preventDefault();
   inputs.forEach((element, i) => {
      if (element.value == "") {
         element.classList.add("form__input--invalid");
         element.classList.remove("form__input--valid");
      }
   });

   let inputValid = regForm.querySelectorAll(".form__input--valid");

   if (!pravicyCheck.checked) {
      checkboxIndicator.classList.add("form__checkbox-indicator--error");
   } else {
      checkboxIndicator.classList.remove("form__checkbox-indicator--error");
   }

   if (inputValid.length == 3 && pravicyCheck.checked) {
      localStorage.setItem("Name", regName.value);
      localStorage.setItem("Email", regEmail.value);
      localStorage.setItem("Phone", regPhone.value);
      regForm.submit();
   }
   
});

})();