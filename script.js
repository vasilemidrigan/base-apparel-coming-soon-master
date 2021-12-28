"use strict";
// Variables
const input = document.getElementById("email-address");
const errorMessage = document.querySelector(".error-message");
const exclamationMark = document.querySelector(".exclamation-mark");

// Prevent default behaviour of the error message tooltip
input.addEventListener(
  "invalid",
  function (el) {
    el.preventDefault();
  },
  true
);

// ---- If the email format isn't correct ----
// 1. Adding a red 1px border to the input field
// 2. Showing the exclamation mark and the error message
input.addEventListener("invalid", function () {
  input.style.border = "1px solid red";
  exclamationMark.classList.remove("hidden");
  errorMessage.classList.remove("hidden");
});
