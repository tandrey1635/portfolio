const reviewsOwl = $(".reviews__wrapper").owlCarousel({
    loop: true,
    
    responsive:{
        0: {
            items: 1,  
            margin: 20
        },

        480: {
            items: 1,  
        },

        768: {
            items: 2,
            margin: 20
        },

    }

});

$('.reviews__btn-next').click(function() {
    reviewsOwl.trigger('next.owl.carousel');
});

$('.reviews__btn-prev').click(function() {
    reviewsOwl.trigger('prev.owl.carousel');
});

reviewsOwl.owlCarousel();





const partnersOwl = $(".partners__wrapper").owlCarousel({
    loop: true,
    
    responsive:{
        0: {
            items: 1,
        },

        360: {
            items: 2,
        },

        480: {
            items: 3,  
        },

        576:{
            items: 5,
        },

        676:{
            items: 6,
        },

        768: {
            items: 8,
        }
    }

    
});

$('.partners__btn-next').click(function() {
    partnersOwl.trigger('next.owl.carousel');
});

$('.partners__btn-prev').click(function() {
    partnersOwl.trigger('prev.owl.carousel');
});

partnersOwl.owlCarousel();



