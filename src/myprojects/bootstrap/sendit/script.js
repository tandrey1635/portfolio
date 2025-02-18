function showModalAndBurgerMenu() {

	const headerMenu = document.querySelector('.header__nav')

	function showBurgerMenu(){

		const openBtn = document.querySelector('.header__burger__menu')
		const closeBtn = document.querySelector('.header__close')
		const headerLink = document.querySelectorAll('.header__link')
	
	
		function changeStateBurgerMenuLinks (){
			headerLink.forEach(link=>{
				link.addEventListener('click', ()=>{
					headerMenu.classList.remove('active')
					document.body.style.overflow = ''
				})
			})
		}
	
		changeStateBurgerMenuLinks()
		
		openBtn.addEventListener('click', ()=>{
			headerMenu.classList.add('active')
			document.body.style.overflow = 'hidden'
		})
	
		closeBtn.addEventListener('click', ()=>{
			headerMenu.classList.remove('active')
			document.body.style.overflow = ''
		})
	
	}

	showBurgerMenu()

	function showModal() {
		const body = document.querySelector('body')
		const modal = document.querySelector('.modal')
	
	
		body.addEventListener('click', (e)=>{
			
	
			if (e.target.getAttribute('data-call', "call")) {
				e.preventDefault()
				modal.classList.add('active')
				body.style.overflow = 'hidden'
			}

			if (e.target.getAttribute('data-mobile', "yes")) {
				modal.classList.add('active')
			}
	
			if (e.target.classList.contains('modal') || e.target.classList.contains('modal__btn') || e.target.classList.contains('modal__close__photo')) {
				modal.classList.remove('active')
				if (!headerMenu.classList.contains('active')) {
					body.style.overflow = ''
				}
				
			}

		})
	}

	showModal()
}


showModalAndBurgerMenu()







