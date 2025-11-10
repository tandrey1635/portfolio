Fancybox.bind('[data-fancybox="video-gallery"]', {
	Carousel: {
		transition: "slide",
	},

});

const arrowUpBtn = document.querySelector('.block__arrow__up')

window.addEventListener('scroll', ()=>{
	if (window.pageYOffset > 500) {
		arrowUpBtn.classList.add('block__arrow__up__active')
	}
	else {
		arrowUpBtn.classList.remove('block__arrow__up__active')
	}
})

arrowUpBtn.addEventListener('click', ()=>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})


const body = document.querySelector('body')
const myModalOrder = new bootstrap.Modal('#modalOrder')
const myModalHeader = document.querySelector('.modalOrder__header')
const myModalImg = document.querySelector('.modalOrder__photo')
const myModalprice = document.querySelector('.modalOrder__price')

const myModalSuccess = new bootstrap.Modal('#modalSuccess')

/* Показывает название, фото и цену товара на тот который кликнул */
body.addEventListener('click', (e)=>{

	const showModalOrder = (header, img, price) => {
		myModalOrder.show()
		myModalHeader.textContent = header.textContent
		myModalImg.setAttribute('src', img.src)
		myModalImg.setAttribute('alt', img.alt)
		myModalprice.textContent = `Цена: ${price.textContent}`
	}

	if  (e.target.classList.contains('hot__prices__btn')) {
		const cardItem = e.target.closest('.hot__prices__item')
		const cardImg = cardItem.querySelector('.hot__prices__photo')
		const cardHeader = cardItem.querySelector('.card-title')
		const cardPrice = cardItem.querySelector('.hot__prices__price')

		showModalOrder(cardHeader, cardImg, cardPrice)
	}

	else if (e.target.classList.contains('categories__btn')) {
		const cardItem = e.target.closest('.card')
		const cardImg = cardItem.querySelector('.categories__photo')
		const cardHeader = cardItem.querySelector('.card-title')
		const cardPrice = cardItem.querySelector('.categories__price')

		showModalOrder(cardHeader, cardImg, cardPrice)
	}

})