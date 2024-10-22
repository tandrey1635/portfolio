const newsPageSwiper= new Swiper('.news__page__swiper', {
    slidesPerView: 2,
    speed: 400,
    spaceBetween: 30,
    loop: true,
    navigation: {
        prevEl: '.news__page__swiper__navigation-left',
        nextEl: '.news__page__swiper__navigation-right',
    }    
})