$(function () {
  $('.menu__btn, .menu__btn-close, .menu__item-link, .menu__button, .menu__logo' ).on('click', function () {
    $('.menu').toggleClass('_active');
  });
  $('.header__contact-btn, .contact__btn, .contact__social-link' ).on('click', function () {
    $('.contact').toggleClass('_active');
  })
});

const swiperBg = new Swiper('.header__swiper', {
  effect: 'fade',
  speed: 700,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.header__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.header__button-next',
    prevEl: '.header__button-prev',
  },

});
const swiperText = new Swiper('.header__text-swiper', {
  centerSlides: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

swiperBg.controller.control = swiperText;
swiperText.controller.control = swiperBg;

