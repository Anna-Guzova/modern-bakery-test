const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.carusel-button.next',
    prevEl: '.carusel-button.prev',
  },
});
