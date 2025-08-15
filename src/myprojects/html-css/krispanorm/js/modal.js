const modalBtn = document.querySelector('.about__modal__img')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')

modalBtn.addEventListener('click', ()=>{
	modal.classList.add('modal_show')
	document.body.style.overflow = 'hidden'
})

modalClose.addEventListener('click', ()=>{
	modal.classList.remove('modal_show')
	document.body.style.overflow = ''
})


