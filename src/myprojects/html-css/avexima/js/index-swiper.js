const swiper = new Swiper('.swiper, .mission__swiper' , {
    speed: 400,
    spaceBetween: 10,
    mousewheel: true,
    mousewheel: {
        releaseOnEdges: true,
    },
    slidesPerView: 1,
});


const preparationSwiperMobile = new Swiper('.swiper, .preparations__swiper' , {
    speed: 400,
    spaceBetween: 10,  
    slidesPerView: 1, 
});

const preparationSwiperMobileTwo = new Swiper('.swiper, .preparations__swiper-two' , {
    speed: 400,
    spaceBetween: 10,    
});




const scientificSwiper = new Swiper('.swiper, .scientific__swiper' , {
    slidesPerView: 1.5,
    speed: 400,
    spaceBetween: -80,
    navigation: {
        nextEl: '.scientific__navigation__right',
        prevEl: '.scientific__navigation__left',
    },
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 100,
        }, 
        992: {
            slidesPerView: 1.5,
        },
        1400:{
            spaceBetween: -50,
        },
        1500:{
            spaceBetween: -40,
        },
        1600:{
            spaceBetween: -60,
        },
        1700: {
            slidesPerView: 1.5
        }
    }
});

