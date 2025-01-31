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
    })

})
var swiper = new Swiper(".video-banner", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    slidesPerView: 1.5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000,
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
          if($(window).width()>767){
          var ur = currentSlide.find('video').attr('data-desktop');
          }else{
            var ur = currentSlide.find('video').attr('data-mobile');
          }
          currentSlide.find('video').attr('src', ur);
        }
      }
});
