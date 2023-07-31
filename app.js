const burgerBtn = document.querySelector(".burger-button");
const navBar = document.querySelector("#navbarToggle");
burgerBtn.addEventListener("click", function () {
  burgerBtn.querySelector(".burger-icon").classList.toggle("open");
  navBar.classList.toggle("collapse");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerBtn.querySelector(".burger-icon").classList.toggle("open");
    navBar.classList.toggle("collapse");
  });
});

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  direction: "horizontal",
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 40,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 50,
  //     },
  //   },
});

//
