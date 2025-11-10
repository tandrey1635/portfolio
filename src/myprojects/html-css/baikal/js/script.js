import { changeOwlNavigationListener } from "./OwlCarousel2.js";
import { owlVideo } from "./OwlCarousel2.js";
import { initSlick } from "./SlickSlider.js";

const slickSlider = initSlick();


/* Бургер меню */
const burgerMenuBtn = $(".promo__burger__menu");
const burgerMenu = $(".promo__nav_mobile");
const burgerLines = $(".promo__burger__menu__line");
const navLink = $(".promo__nav-link");

function showBurgerMenu() {
	burgerMenuBtn.on("click", function () {
		burgerMenu.toggleClass("active__mobile");
		burgerLines.toggleClass("active__burger__line");

		if (burgerMenu.hasClass("active__mobile")) {
			$(document.body).css("overflow", "hidden");
		} else {
			$(document.body).css("overflow", "");
		}
	});

	navLink.on("click", function () {
		burgerMenu.removeClass("active__mobile");
		burgerLines.removeClass("active__burger__line");
		$(document.body).css("overflow", "");
	});
}

showBurgerMenu()



/* Модалка оставить заявку */
const modal = $(".modal");

function showModal() {
	$(document.body).on("click", function (e) {
		if (
			$(e.target).attr("data-modal") == "modal" ||
			$(e.target).hasClass("promo__btn")
		) {
			modal.addClass("modal__active");
			$(document.body).css("overflow", "hidden");
		}

		if (
			$(e.target).hasClass("modal__close") ||
			$(e.target).hasClass("modal__close__line")
		) {
			modal.removeClass("modal__active");
			if (!burgerMenu.hasClass("active__mobile")) {
				$(document.body).css("overflow", "");
			}
		}
	});
}

showModal()


/* Обрезать заголовок в карточках */
const smallCardItemsHeader = $(".small__card__header");

function showCardItemsHeader() {
	smallCardItemsHeader.each(function () {
		const fullText = $(this).text();
		if (fullText.length > 55) {
			let shortText = fullText.slice(0, 55) + "...";
			$(this).text(shortText);
		}
	});
}

showCardItemsHeader()


/* menuSpy эмуляция переключения страниц */
const menuSpyLink = $(".menu__spy__link");

function initMenuSpy() {
	menuSpyLink.on("click", function (e) {
		if ($(e.target).hasClass("menu__spy__link_noscroll")) {
			e.preventDefault();
		}
		menuSpyLink.removeClass("menu__spy__link_active");
		$(e.target).addClass("menu__spy__link_active");
	});
}

initMenuSpy()

/* Пагинация */
const pagination = $(".pagination__menu");
const paginationLink = $(".pagination__link");

function initPagination () {
	const changePagination = function(elementClassName, element, numberPage){
		elementClassName.removeClass("active-page")
		element.eq(numberPage).addClass("active-page")
	}

	pagination.on("click", function (e) {
		e.preventDefault();
		if ($(e.target).hasClass("pagination__link")) {
			paginationLink.removeClass("active-page");
			$(e.target).addClass("active-page");
		}

		if ($(e.target).hasClass("pagination__link_next")) {
			$(e.target).removeClass("active-page");
			changePagination($(e.target), paginationLink, 1)
		}

		if ($(e.target).hasClass("pagination__link_prev")) {
			$(e.target).removeClass("active-page");
			changePagination($(e.target), paginationLink, paginationLink.length - 2)
		}
	});
}

initPagination()




/* Табы в галерее */
const tabBtns = $(".gallery__header");
const tabItems = $(".gallery__box");
const sliderArrowLeft = $(".gallery__arrows__photo-left");
const sliderArrowRight = $(".gallery__arrows__photo-right");
const galleryLink = $(".gallery__link");

function changeTabs() {
	const hideTabs = function () {
		tabItems.hide();
	};

	const showTabs = function (i) {
		tabItems.eq(i).show();
	};

	hideTabs();
	showTabs(0);

	const changeClassTabBtn = function (element, className) {
		tabBtns.removeClass(className);
		element.addClass(className);
	};

	const changeAttrElement = function (element, attr, changedAttr, text) {
		element.attr(attr, changedAttr);
		element.text(text);
	};

	tabBtns.on("click", function (e) {
		if ($(e.target).attr("data-tabs") == "photo") {
			changeClassTabBtn($(e.target), "gallery__header_active");
			hideTabs();
			showTabs(0);
			changeAttrElement(
				galleryLink,
				"href",
				"html/photo-gallery.html",
				"Перейти в раздел фото"
			);
			changeAttrElement(
				sliderArrowLeft,
				"class",
				"gallery__arrows__photo gallery__arrows__photo-left"
			);
			changeAttrElement(
				sliderArrowRight,
				"class",
				"gallery__arrows__photo gallery__arrows__photo-right"
			);
		}

		if ($(e.target).attr("data-tabs") == "video") {
			changeClassTabBtn($(e.target), "gallery__header_active");
			hideTabs();
			showTabs(1);
			changeAttrElement(
				galleryLink,
				"href",
				"html/video-gallery.html",
				"Перейти в раздел видео"
			);
			changeAttrElement(
				sliderArrowLeft,
				"class",
				"gallery__arrows__video gallery__arrows__video-left"
			);
			changeAttrElement(
				sliderArrowRight,
				"class",
				"gallery__arrows__video gallery__arrows__video-right"
			);
			changeOwlNavigationListener(
				$(".gallery__arrows__video-left"),
				owlVideo,
				"prev.owl.carousel"
			);
			changeOwlNavigationListener(
				$(".gallery__arrows__video-right"),
				owlVideo,
				"next.owl.carousel"
			);
		}
	});
}

changeTabs()

/* Таймер обратного отсчета */
const blockYears = $('#years')
const blockDays = $('#days')
const blockHours = $('#hours')
const blockMinutes = $('#minutes')
const blockSeconds = $('#seconds')

function initCountdown() {
	const lastDayAction = "2100-01-01"
	const lastDate = Date.parse(lastDayAction)

	const updateTimer = () => {
		const nowDate = Date.parse(new Date())

		if (lastDate - nowDate < 0) {
			blockYears.text(0);
			blockDays.text(0);
			blockHours.text('00');
			blockMinutes.text('00');
			blockSeconds.text('00');
			return;
    	}

		const years = Math.floor((lastDate - nowDate) / (1000 * 60 * 60 * 24 * 365))
		const days = Math.floor(((lastDate - nowDate) % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24))
		const hours = Math.floor((lastDate - nowDate) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
		const minutes = Math.floor((lastDate - nowDate) % (1000 * 60 * 60) / (1000 * 60))
		const seconds = Math.floor((lastDate - nowDate) % (1000 * 60) / 1000)

		blockYears.text(years)
		blockDays.text(days)
		blockHours.text(hours.toString().padStart(2, '0'))
		blockMinutes.text(minutes.toString().padStart(2, '0'))
		blockSeconds.text(seconds.toString().padStart(2, '0'))

	}

	updateTimer()

	setInterval(updateTimer, 1000)
}

initCountdown()


/* Аккордеон стр полезной информации */
const accordeon = $(".inner__page__subheader_accordeon")

function showAccordeon() {
	accordeon.on('click', function (e) {
		$(e.target).toggleClass('inner__page__subheader_accordeon__active')
		$(e.target).next().toggleClass('inner__page__descriptions__active')
	})
}

showAccordeon()


/* Стрелка вверх */
const arrowUp = $(".modal__arrow");

function showArrowUp() {
	$(window).on("scroll", function () {
		if (window.pageYOffset > 200) {
			arrowUp.addClass("modal__arrow__active");
		} else {
			arrowUp.removeClass("modal__arrow__active");
		}
	});

	arrowUp.on("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}

showArrowUp()