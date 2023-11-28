var swiper = new Swiper(".usefulSlider", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 24,
});
var swiper = new Swiper(".usefulSliderTwo", {
    slidesPerView: 2,
    // centeredSlides: true,
    spaceBetween: 24,
    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        993: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
});