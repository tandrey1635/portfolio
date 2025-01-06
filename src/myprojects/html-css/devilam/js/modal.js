const showModalSpecialists = () => {
	const modal = document.querySelector('.modal')

	const changeBodyScroll = () => {
		if (modal.classList.contains('modal__active')) {
			document.body.style.overflow = 'hidden'
		}
		else{
			document.body.style.overflow = ''
		}
	}

	changeBodyScroll()

	const closeModal = () => {
		modal.classList.remove('modal__active')
	}

	modal.addEventListener('click', (e)=>{
		const changeShowModalText = ()=>{
			if (e.target.classList.contains('btn_modal_info')) {
				e.target.previousElementSibling.classList.toggle('modal__info__active')
				e.target.classList.toggle('btn_modal_info_active')
				modal.firstElementChild.classList.toggle('modal__dialog__active')
				e.target.textContent = 'Скрыть'
	
				if (!e.target.classList.contains('btn_modal_info_active')) {
					e.target.textContent = 'Ознакомиться с правилами использования информации на данном сайте'
				}	
			}
		}

		changeShowModalText()

		const changeShowModalClickBtns = () => {
			if (e.target.classList.contains('btn_modal_yes') || e.target.classList.contains('modal__close') || e.target.classList.contains('modal__close__photo')) {
				closeModal()
				document.body.style.overflow = ''
			}
			else if (e.target.classList.contains('btn_modal_no')) {
				document.location = '../index.html'
			}
		}
		changeShowModalClickBtns()
		
	})
}


showModalSpecialists()