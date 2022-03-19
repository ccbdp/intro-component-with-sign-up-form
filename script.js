"use strict";

const inputDiv = document.querySelectorAll(".input-div");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");

const checkValidity = () => {
  const inputFirstName = document.getElementById("input-first-name");
  const inputLastName = document.getElementById("input-last-name");
  const inputEmail = document.getElementById("input-email");
  const inputPw = document.getElementById("input-pw");

  const firstNameValue = inputFirstName.value.trim();
  const lastNameValue = inputLastName.value.trim();
  const emailValue = inputEmail.value.trim();
  const passwordValue = inputPw.value.trim();

  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (firstNameValue === "") {
    inputDiv[0].classList.add("error");
  } else {
    inputDiv[0].classList.remove("error");
  }
  if (lastNameValue === "") {
    inputDiv[1].classList.add("error");
  } else {
    inputDiv[1].classList.remove("error");
  }
  if (emailValue.match(regEx)) {
    inputDiv[2].classList.remove("error");
  } else {
    inputDiv[2].classList.add("error");
  }
  if (passwordValue === "") {
    inputDiv[3].classList.add("error");
  } else {
    inputDiv[3].classList.remove("error");
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkValidity();
});
