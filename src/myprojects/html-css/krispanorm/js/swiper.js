const swiper = new Swiper(".swiper", {
	slidesPerView: 'auto',

	navigation: {
		nextEl: ".knowledge__navigations_right",
		prevEl: ".knowledge__navigations_left",
	},

	on: {
		slideChange: function () {
			const prevButton = document.querySelector('.knowledge__navigations_left')
			const nextButton = document.querySelector('.knowledge__navigations_right')
			const prevButtonImg = prevButton.querySelector('img')
			const nextButtonImg = nextButton.querySelector('img')


			if (this.isBeginning) {
				this.allowSlidePrev = false;
				prevButton.classList.add('knowledge__navigations_disabled')
				prevButtonImg.setAttribute('src', 'icons/slider-paginations-arrow-disabled.svg')
			}
			else {
				this.allowSlidePrev = true;
				prevButton.classList.remove('knowledge__navigations_disabled')
				prevButtonImg.setAttribute('src', 'icons/slider-paginations-arrow.svg')
			}

			if (this.isEnd) {
				this.allowSlideNext = false;
				nextButton.classList.add('knowledge__navigations_disabled')
				nextButtonImg.setAttribute('src', 'icons/slider-paginations-arrow-disabled.svg')
			}
			else {
				this.allowSlideNext = true;
				nextButton.classList.remove('knowledge__navigations_disabled')
				nextButtonImg.setAttribute('src', 'icons/slider-paginations-arrow.svg')
			}
		}

	},

});

const sliderWrapper = document.querySelector(".knowledge__wrapper");

sliderWrapper.addEventListener("click", (e) => {
	const knowledgeItemsBtn = e.target;
	const knowledgeItemsWrapper = e.target.parentElement.nextElementSibling;
	const knowledgeItems = e.target.parentElement.parentElement;
	const knowledgeItemsDescriptions =
		knowledgeItems.lastElementChild.lastElementChild;
	const knowledgeItemsBottom =
		knowledgeItemsDescriptions?.previousElementSibling;

	function changeActiveClass(selector, className) {
		selector.classList.toggle(className);
	}

	if (knowledgeItemsBtn.classList.contains("knowledge__items__btn")) {
		if (knowledgeItemsBtn.textContent == "-") {
			knowledgeItemsBtn.textContent = "+";
		} else {
			knowledgeItemsBtn.textContent = "-";
		}

		changeActiveClass(knowledgeItemsBtn, "knowledge__items__btn_active");
		changeActiveClass(knowledgeItems, "knowledge__items_active");
		changeActiveClass(
			knowledgeItemsWrapper,
			"knowledge__items__wrapper_active"
		);
		changeActiveClass(
			knowledgeItemsBottom,
			"knowledge__items__bottom_active"
		);
		changeActiveClass(
			knowledgeItemsDescriptions,
			"knowledge__items__descriptions_active"
		);


		setTimeout(() => {
			swiper.update();
			const activeSlide = document.querySelector('.knowledge__items_active');
			if (activeSlide) {
				activeSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
			}
		}, 300);
	}
});



