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
    delay: 14000,
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

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Add event listener to button click
document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("close-newsletter"); // Change ID to match your button
    if (button) {
        button.addEventListener("click", function () {
            setCookie("form_submitted", "true", 15); // Set cookie for 15 days
        });
    }
});
