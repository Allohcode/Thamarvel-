const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
let menu = document.querySelector("#nav-bar");
let navlist = document.querySelector(".nav-link");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

// slide tour
const carouselSlide = document.querySelector(".carusel-slide");
const carouselImages = document.querySelectorAll(".carusel-slide img");

//
const prevBtn = document.querySelector("#prebtn");
const nxtBtn = document.querySelector("#nxtbtn");

// counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translate(" + -size * counter + "px)";

// butten listners

nxtBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translate(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translate(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translate(" + -size * counter + "px)";
  }
});
carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translate(" + -size * counter + "px)";
  }
});
