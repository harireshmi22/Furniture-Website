const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    modifierClass: "custom-pagination-", // Adds 'custom-pagination' to the class
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
