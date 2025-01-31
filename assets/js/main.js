$(document).ready(function(){
    $('.move-image').on('click',function(){
        $(this).parents('.row').toggleClass('right');
    })
    $('.newslatter-popup .close').on('click',function(){
      $('.newslatter-popup').fadeOut();
    })
    jQuery(document).on('click','.newslatter-popup', function(e) {
      if (e.target !== this)
        return;
      e.preventDefault();
      jQuery('.newslatter-popup').fadeOut(300);
    });
    $('.video-popup-btn').on('click',function(e){
      e.preventDefault();
        $('.video-popup').fadeIn();
    })
    $('.video-popup .close').on('click',function(){
      $('.video-popup').fadeOut();
    })
    jQuery(document).on('click','.video-popup', function(e) {
      if (e.target !== this)
        return;
      e.preventDefault();
      jQuery('.video-popup').fadeOut(300);
    });
    $('.video-banner video').each(function(){
      if($(window).width()>767){
        $(this).attr('src',$(this).attr('data-desktop'))
      }else{
        $(this).attr('src',$(this).attr('data-mobile'))
      }
    })
    $(window).resize(function(){
      $('.video-banner video').each(function(){
        if($(window).width()>767){
          $(this).attr('src',$(this).attr('data-desktop'))
        }else{
          $(this).attr('src',$(this).attr('data-mobile'))
        }
      })
      const i_firstVideo = document.querySelector('.swiper-slide-active video');
      if (i_firstVideo) {
        i_firstVideo.currentTime = 0;
        i_firstVideo.play();
      }
    })

})
var swiper = new Swiper(".video-banner", {
  slidesPerView: "auto",  
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    }
  },
  on: {
    slideChangeTransitionEnd: function () {
      const slides = document.querySelectorAll('.swiper-slide video');
      slides.forEach(video => {
        video.pause();  
        video.currentTime = 0;
      });
      const activeSlide = document.querySelector('.swiper-slide-active video');
      if (activeSlide) {
        activeSlide.play();
      }
    }
  }
});
window.onload = () => {
  const firstVideo = document.querySelector('.swiper-slide-active video');
  if (firstVideo) {
    firstVideo.currentTime = 0;
    firstVideo.play();
  }
};