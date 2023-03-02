"use strict";
const btnKeys = document.querySelectorAll(".calculator__key");
const Enter = document.querySelector(".calculator__key--enter");
const Clear = document.querySelector(".calculator__key:nth-child(16)");
const Decimal = document.querySelector(".calculator__key:nth-child(14)");

window.addEventListener("load", function () {
  let input = "0";

  for (let i = 0; i < btnKeys.length; i++) {
    btnKeys[i].addEventListener("click", function () {
      if (input.length < 9) {
        if (btnKeys[i].textContent === ".") {
          // Check if decimal point already exists
          if (input.indexOf(".") === -1) {
            input += ".";
          }
        } else if (btnKeys[i].textContent === "AC") {
          input = "0";
        } else {
          // Only add numbers and operators
          if (
            !isNaN(btnKeys[i].textContent) ||
            /[+\-*/]/.test(btnKeys[i].textContent)
          ) {
            if (input === "0" || /[+\-*/]/.test(input[input.length - 1])) {
              // Remove leading zeros and leading operators
              input = input.slice(0, input.length - 1);
            }
            input += btnKeys[i].textContent;
          }
        }
        document.querySelector(".calculator__output").textContent = input;
      }
    });
  }

  Enter.addEventListener("click", function () {
    // Split input into an array of numbers and operators
    let expr = input.split(/([+\-*/])/g);
    let result = "";

    // Evaluate the expression
    try {
      result = eval(input);
    } catch (e) {
      result = "Error";
    }

    // Update the output display
    document.querySelector(".calculator__output").textContent = result;

    // Reset the input value
    input = "0";
  });

  Clear.addEventListener("click", function () {
    input = "0";
    document.querySelector(".calculator__output").textContent = input;
  });
});
