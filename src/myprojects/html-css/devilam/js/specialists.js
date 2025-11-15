const showQuestionList = () => {
	const showBtnList = document.querySelector('.btn__news__announce_question-list')
	showBtnList.addEventListener('click', ()=> {
		showBtnList.nextElementSibling.classList.toggle('show')
		if (showBtnList.nextElementSibling.classList.contains('show')) {
			showBtnList.textContent = 'Скрыть список вопросов'
		}
		else {
			showBtnList.textContent = 'Показать список вопросов'
		}
	})
}

showQuestionList()


const changeImgTabs = () => {
	const headers = document.querySelectorAll('.about__bottom__header')
	const img = document.querySelectorAll('.about__bottom__img')
	const descriptions = document.querySelectorAll('.about__bottom__descriptions')


	const showElement = (header, headerClassName, img, imgClassName, descriptions, descriptionsClassName) => {
		header.classList.add(headerClassName)
		img.classList.add(imgClassName)
		descriptions.classList.add(descriptionsClassName)
	}

	const notShowElement = (header, headerClassName, img, imgClassName, descriptions, descriptionsClassName) => {
		header.classList.remove(headerClassName)
		img.classList.remove(imgClassName)
		descriptions.classList.remove(descriptionsClassName)
	}

	if (window.innerWidth < 992) {
		headers[0].addEventListener('click', ()=>{
			showElement(headers[0], 'header__active', img[0], 'img__active', descriptions[0], 'descriptions__active')
			notShowElement(headers[1], 'header__active', img[1], 'img__active', descriptions[1], 'descriptions__active')
		})

		headers[1].addEventListener('click', ()=>{
			showElement(headers[1], 'header__active', img[1], 'img__active', descriptions[1], 'descriptions__active')
			notShowElement(headers[0], 'header__active', img[0], 'img__active', descriptions[0], 'descriptions__active')
		})
	}

}

changeImgTabs()


const changeFeaturesImg = () => {
	const nextBtn = document.querySelector('.btn_paginations_next')
	const prevBtn = document.querySelector('.btn_paginations_prev')

	const featuresItem = document.querySelectorAll('.features__item')
	const featuresItemDescription = document.querySelectorAll('.features__item__description')
	const pagination = document.querySelector('.btn_paginations_page')


	const clearAllItems = () => {
		featuresItem.forEach(item=> {
			item.classList.add('hide_zIndex')
			item.classList.remove('show_zIndex')
			item.classList.remove('animate__pulse')
		})
	}

	const hideAllItemsDescription = () => {
		featuresItemDescription.forEach(itemDescription=>{
			itemDescription.classList.add('hide_description')
		})
	}


	const showItemZindex = (index) => {
		featuresItem[index].classList.add('show_zIndex')
	}


	const showItemsDescription = (index) => {
		featuresItemDescription[index].classList.remove('hide_description')
	}

	/* Для корректной карточной колоды кода пагинация прошла назад */
	const addItemsZindex = () => {
		featuresItem[0].classList.add('one_zIndex')
		featuresItem[1].classList.add('two_zIndex')
		featuresItem[2].classList.add('three_zIndex')
		featuresItem[3].classList.add('four_zIndex')
	}


	const removeItemsZindex = () => {
		featuresItem[0].classList.remove('one_zIndex')
		featuresItem[1].classList.remove('two_zIndex')
		featuresItem[2].classList.remove('three_zIndex')
		featuresItem[3].classList.remove('four_zIndex')
	}


	const addAnimation = (i)=> {
		featuresItem[i].classList.add('animate__pulse')
	}


	/* Скрыть все описания у карточек и показать у первой */
	hideAllItemsDescription()
	showItemsDescription(0)


	nextBtn.addEventListener('click', (e)=> {
		e.preventDefault()
		if (pagination.textContent == '1 из 4') {
			clearAllItems()
			hideAllItemsDescription()
			removeItemsZindex()
			addAnimation(1)
			showItemZindex(1)
			showItemsDescription(1)
			pagination.textContent = '2 из 4'
		}
		else if (pagination.textContent == '2 из 4') {
			clearAllItems()
			hideAllItemsDescription()
			removeItemsZindex()
			addAnimation(2)
			showItemZindex(2)
			showItemsDescription(2)
			pagination.textContent = '3 из 4'
		}
		else if (pagination.textContent == '3 из 4') {
			clearAllItems()
			hideAllItemsDescription()
			removeItemsZindex()
			addAnimation(3)
			showItemZindex(3)
			showItemsDescription(3)
			pagination.textContent = '4 из 4'
		}
	})


	prevBtn.addEventListener('click', (e)=>{
		e.preventDefault()
		if (pagination.textContent == '4 из 4') {
			clearAllItems()
			hideAllItemsDescription()
			addAnimation(2)
			showItemZindex(2)
			showItemsDescription(2)
			pagination.textContent = '3 из 4'
		}
		else if (pagination.textContent == '3 из 4') {
			clearAllItems()
			hideAllItemsDescription()
			addAnimation(1)
			showItemZindex(1)
			showItemsDescription(1)
			pagination.textContent = '2 из 4'
		}
		else if (pagination.textContent == '2 из 4') {
			addItemsZindex()
			hideAllItemsDescription()
			clearAllItems()
			addAnimation(0)
			showItemsDescription(0)
			pagination.textContent = '1 из 4'
		}

	})
}


changeFeaturesImg()