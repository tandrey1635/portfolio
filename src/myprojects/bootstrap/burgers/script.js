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
		top: 0
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
	

	if (e.target.classList.contains('categories__btn') || e.target.classList.contains('hot__prices__btn')) {
		const itemProductHeader = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML
		const itemProductImg = e.target.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute('src')
		const itemProductAlt= e.target.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute('alt')
		const itemProductPrice = e.target.previousElementSibling.textContent

		myModalOrder.show()
		myModalHeader.innerHTML = itemProductHeader
		myModalImg.setAttribute('src', itemProductImg)
		myModalImg.setAttribute('alt', itemProductAlt)
		myModalprice.textContent = `Цена: ${itemProductPrice}`
	}
	
})