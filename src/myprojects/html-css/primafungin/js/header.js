const showMobileHeader = () =>{
	const burgerBtn = document.querySelector('.header__burger__menu')
	const burgerBtnLine = document.querySelectorAll('.header__burger__line')
	const headerMenu = document.querySelector('.header__center')
	const headerLink = document.querySelectorAll('.header__link')

	burgerBtn.addEventListener('click', ()=>{
		headerMenu.classList.toggle('active__header')
		addBurgerBtnLine()

		if (headerMenu.classList.contains('active__header')) {
			document.body.style.overflow = 'hidden'
		}
		else{
			document.body.style.overflow = ''
		}

	})

	const addBurgerBtnLine = () =>{
		burgerBtnLine.forEach(line=>{
			line.classList.toggle('active__line')
		})
	}

	const removeBurgerBtnLine = () =>{
		burgerBtnLine.forEach(line=>{
			line.classList.remove('active__line')
		})
	}

	headerLink.forEach(link=>{
		link.addEventListener('click', ()=>{
			headerMenu.classList.remove('active__header')
			removeBurgerBtnLine()
			document.body.style.overflow = ''
		})
		
	})

	
}


export { showMobileHeader }