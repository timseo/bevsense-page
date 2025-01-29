$(document).ready(function(){
    $('.move-image').on('click',function(){
        $(this).parents('.row').toggleClass('right');
    })
})
var swiper = new Swiper(".video-banner", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    slidesPerView: 1.5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    on: {
        slideChange: function () {
          // Remove autoplay from the previous slide's video
          var previousSlide = $(this.slides[this.previousIndex]);
          previousSlide.find('video').removeAttr('autoplay');
    
          // Remove autoplay from the current slide's video
          var currentSlide = $(this.slides[this.activeIndex]);
          currentSlide.find('video').attr('autoplay','autoplay');
        }
      }
});