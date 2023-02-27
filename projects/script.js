"use strict";
const btnKeys = document.querySelectorAll(".calculator__key");
window.addEventListener("load", function () {
  // display the value of the calculator__key when clicked
  // add 2 numbers
  for (let i = 0; i < btnKeys.length; i++) {
    btnKeys[i].addEventListener("click", function () {
      document.querySelector(".calculator__output").textContent =
        btnKeys[i].textContent;
    });
  }
});
