"use strict";
const btnKeys = document.querySelectorAll(".calculator__key");
window.addEventListener("load", function () {
  // limit amount of characters to 9
  // only include numbers
  // if the textContent = AC, set input to zero
  let input = "";

  for (let i = 0; i < btnKeys.length; i++) {
    console.log(btnKeys[i].textContent);
    btnKeys[i].addEventListener("click", function () {
      // console.log(btnKeys[i].textContent);

      if (input.length < 9) {
        input += btnKeys[i].textContent;
        console.log(input);
      }
      if (btnKeys[i].textContent === "AC") {
        input = "0";
      }
      document.querySelector(".calculator__output").textContent = input;
    });
  }
});
