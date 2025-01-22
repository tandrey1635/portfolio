const showSlick = ()=>{
    $(document).ready(function () {
        $(".reviews__wrapper").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: $(".reviews__prev__arrow"),
            nextArrow: $(".reviews__next__arrow"),
    
            responsive: [
                {
                    breakpoint: 1401,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },

                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                
            ],
        });
    
        $(".about__thrush__wrapper").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            prevArrow: $(".about__thrush__slider__navigations__left"),
            nextArrow: $(".about__thrush__slider__navigations__right"),
    
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },

                
            ],
        });
    });
}


export { showSlick }

