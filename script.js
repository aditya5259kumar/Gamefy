//loader

window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  loader.style.display = "none";
});

// window.addEventListener("load", function () {
//   const loader = document.getElementById("preloader");
//   setTimeout(() => {
//     loader.style.display = "none";
//   }, 500);
// });

// header hamburger

var navList = document.querySelector(".navlist");
var overlay = document.getElementById("overlay");

function closeSlidebar() {
  navList.classList.remove("show");
  overlay.style.display = "none";
}

function openSlidebar() {
  navList.classList.add("show");
  overlay.style.display = "block";
}

// header animation

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// top games section previos next button

let scrollContainer = document.querySelector(".card-container");
let backBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 800;
  scrollContainer.style.scrollBehavior = "smooth";
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 800;
  scrollContainer.style.scrollBehavior = "smooth";
});

// AOS initialization 

 AOS.init();