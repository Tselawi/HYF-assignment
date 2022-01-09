"use strict";

const btnShow = document.querySelector("#btn-show");
const showMore = document.querySelector(".show-skill");
const contactForm = document.querySelector("#myForm");
let isHide = false;
btnShow.addEventListener("click", (e) => {
  btnShow.textContent = isHide ? "Show More" : "Show Less";
  isHide = !isHide;
  showMore.classList.toggle("show");
});

//! i try to let the form work but there's a problem with oauth in google so it didn't work
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);

  emailjs.sendForm("service_ymkujhl", "template_kzc2kmm", "#myForm").then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
});
