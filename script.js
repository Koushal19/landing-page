new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:20,
  
   
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:2
        },
        768:{
            slidesPerView:3
        },
        1024:{
            slidesPerView:4
        }
    }
  
   
  });