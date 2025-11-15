const showBurgerMenu = ()=> {
	const burgerBtn = document.querySelector('.nav__burger')
	const burgerLine = document.querySelectorAll('.nav__burger__line')
	const headerMenu = document.querySelector('.nav__menu')
	const headerLink = document.querySelectorAll('.nav__link')

	burgerBtn.addEventListener('click', ()=>{
		headerMenu.classList.toggle('active')
		activateCross()

		if (headerMenu.classList.contains('active')) {
			document.body.style.overflow = 'hidden'
		}

		else {
			document.body.style.overflow = ''
			deActivateCross()
		}
	})


	const activateCross = () => {
		burgerLine.forEach(line=> {
			line.classList.add('active__burger__line')
		})
	}


	const deActivateCross = () => {
		burgerLine.forEach(line=> {
			line.classList.remove('active__burger__line')
		})
	}


	headerLink.forEach(link=> {
		link.addEventListener('click', ()=>{
			document.body.style.overflow = ''
			headerMenu.classList.remove('active')
			deActivateCross()
		})
	})

}


showBurgerMenu()