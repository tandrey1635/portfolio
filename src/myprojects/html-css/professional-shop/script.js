const btnMenu = document.querySelector('.header__menu')
const closeBtn = document.querySelector('.header__popup__close')
const popup = document.querySelector('.header__popup')



btnMenu.addEventListener('click', ()=>{
	popup.classList.toggle('header__popup__active')
})

closeBtn.addEventListener('click', ()=>{
	popup.classList.remove('header__popup__active')
})
