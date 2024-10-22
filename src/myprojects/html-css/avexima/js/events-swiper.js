const eventsPageSwiper= new Swiper('.events__page__swiper', {
    slidesPerView: 2,
    speed: 400,
    spaceBetween: 30,
    navigation: {
        prevEl: '.events__page__swiper__navigation-left',
        nextEl: '.events__page__swiper__navigation-right',
    }    
})