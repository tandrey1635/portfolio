function initSlick() {
    if ($(".reviews__wrapper").length) {
        const slickSlider = $(".reviews__wrapper").slick({
            slidesToShow: 2,

			responsive: [
				{
					breakpoint: 677,
					settings: {
						slidesToShow: 1,
					},
				},
			],
        });

		const prevArrow = $(".reviews__navigations_left")
		const nextArrow = $(".reviews__navigations_right")

		nextArrow.click(function () {
			$(".reviews__wrapper").slick("slickNext");
		});

		prevArrow.click(function () {
			$(".reviews__wrapper").slick("slickPrev");
		});


		const paginations = $('.reviews__paginations')

		paginations.on('click', function() {
			const slideIndex = paginations.index(this);
			slickSlider.slick('slickGoTo', slideIndex);
		});

		slickSlider.on('afterChange', function(event, slick, currentSlide) {
			paginations.removeClass('reviews__paginations_active')
				.eq(currentSlide).addClass('reviews__paginations_active');
		});

        return slickSlider;
    }
    return null;
}


export { initSlick };