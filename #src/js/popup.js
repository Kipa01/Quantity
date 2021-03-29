// ===== Popup =====

$('.header-search__icon').click(function () {
   if ($(window).width() < 769) {
      $(this).toggleClass('active')
      $('.popup-header').addClass('active')
      $('body').addClass('lock');
   }
})

$('.popup-header__close').click(function () {
   $('.popup-header').removeClass('active')
   $('body').removeClass('lock');
})