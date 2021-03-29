// ======== Стандартная настройка слайдера ========

$('.mainslider__body').slick({
   speed: 300,
   slidesToShow: 1,
   slidesToScroll: 1,
   infinite: true,
   dots: true,
   adaptiveHeight: true,
   prevArrow: '<button class="mainslider__arrow mainslider__arrow--prev"><img src="../images//icons/arrow-slider-prev.svg" alt=""></button>',
   nextArrow: '<button class="mainslider__arrow mainslider__arrow--next"><img src="../images//icons/arrow-slider-next.svg" alt=""></button>'
});

// ======== /Стандартная настройка слайдера ========