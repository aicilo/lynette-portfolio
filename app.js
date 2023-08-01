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
  direction: "horizontal",
  autoplay: {
    delay: 3000,
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

// Data Fetching
async function loadTestimonials() {
  const data = await fetch("./data/testimonials.json");
  const result = await data.json();
  result.testimonials.forEach((testimonial) => {
    displayTestimonials(testimonial);
  });
}

function displayTestimonials(result) {
  const swiperContainer = document.querySelector(".swiper-wrapper");
  const slideContainer = document.createElement("div");
  slideContainer.classList.add("swiper-slide");
  const { href, text, credit } = result;
  slideContainer.innerHTML = `
              <div class="slide-container">
                <div class="image-container">
                  <img
                    src="${href}"
                    class="customer-image"
                    alt="${credit}"
                  />
                </div>
                <blockquote class="blockqoute">
                  <p class="blockqoute-text">${text}</p>
                  <h3 class="customer-name">${credit}</h3>
                </blockquote>
              </div>
  `;
  swiperContainer.append(slideContainer);
}
loadTestimonials();
