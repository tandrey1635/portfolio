const swiper = new Swiper('.swiper', {

    slidesPerView: 3,

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    
    // Navigation arrows
    navigation: {
      nextEl: '.slider__arrows-right',
      prevEl: '.slider__arrows-left',
    },
  
    
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 991px
       
        991: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        
		1920: {
            slidesPerView: 3,
            spaceBetween: 120
        },
    
    }

  });


  const swiper2 = new Swiper('.swiper2', {

    slidesPerView: 3,

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    
    // Navigation arrows
    navigation: {
      nextEl: '.slider__arrows2-right',
      prevEl: '.slider__arrows2-left',
    },
  
    

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 991px
       
        991: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        
		1920: {
            slidesPerView: 3,
            spaceBetween: 120
        },
    
    }

  });










