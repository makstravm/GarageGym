$(function () {
  $('.menu__btn, .menu__btn-close, .menu__item-link, .menu__button, .menu__logo').on('click', function () {
    $('.menu').toggleClass('_active');
  });

  $('.header__contact-btn, .contact__btn, .contact__social-link').on('click', function () {
    $('.contact').toggleClass('_active');
  });

  $('.menu a, .logo, .link-to-top__btn').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $('.header__top-wrapper, .link-to-top__btn').addClass('active');
  } else {
    $('.header__top-wrapper, .link-to-top__btn').removeClass('active');
  }
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

const swiperCommentsImg = new Swiper('.stories__swiper', {
  centerSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.stories__button-next',
    prevEl: '.stories__button-prev',
  },

})
const swiperCommentsContent = new Swiper('.stories__content-swiper', {
  centerSlides: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }

});
swiperCommentsImg.controller.control = swiperCommentsContent;
swiperCommentsContent.controller.control = swiperCommentsImg;

const swiperTeamImg = new Swiper('.team__swiper', {
  centerSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.team__button-next',
    prevEl: '.team__button-prev',
  },

})
const swiperTeamContent = new Swiper('.team__content-swiper', {
  centerSlides: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }

});
swiperTeamImg.controller.control = swiperTeamContent;
swiperTeamContent.controller.control = swiperTeamImg;

const swiperBlog = new Swiper('.blog__swiper', {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  spaceBetween: 70,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.blog__pagination',
    clickable: true,
  },

});