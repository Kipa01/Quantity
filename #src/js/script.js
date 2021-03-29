$(document).ready(function () {
   @@include("burger.js")
   @@include("tabs.js")
   @@include("slick.min.js")
   @@include("slider.js")
   @@include("dinamic-adaptive.js")
   @@include("popup.js")
   @@include("rate.js")
   $('.product-tabs__icon').click(function () {
      $(this).toggleClass('active')
   })
});