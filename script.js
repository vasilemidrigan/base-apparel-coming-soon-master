"use strict";
// Variables
let input = document.getElementById("email-address");
const submitButton = document.querySelector(".submit-btn");

// Clear input field when click on them
input.addEventListener("click", function () {
  input.placeholder = "";
});
