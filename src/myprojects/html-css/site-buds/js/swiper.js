const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 30,

	navigation: {
		nextEl: '.advantages__navigations__right',
		prevEl: '.advantages__navigations__left',
	},

	pagination: {
		el: '.advantages__paginations',
		clickable: true,
	},


	on: {
		slideChange: function () {
			const prevButton = document.querySelector('.advantages__navigations__left')
			const nextButton = document.querySelector('.advantages__navigations__right')

			if (this.isBeginning) {
				this.allowSlidePrev = false;
				prevButton.classList.add('advantages__navigations_disabled')
			}
			else {
				this.allowSlidePrev = true;
				prevButton.classList.remove('advantages__navigations_disabled')
			}

			if (this.isEnd) {
				this.allowSlideNext = false;
				nextButton.classList.add('advantages__navigations_disabled')
			}
			else {
				this.allowSlideNext = true;
				nextButton.classList.remove('advantages__navigations_disabled')
			}
		}

	},

});


export { swiper }