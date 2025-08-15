const burgerMenuBtn = document.querySelector('.burger__menu')
const burgerMenu = document.querySelector('.header__mobile')
const burgerMenuLinks = document.querySelectorAll('.header__link')


burgerMenuBtn.addEventListener('click', ()=>{
	burgerMenu.classList.toggle('active__burger__menu')
	if (burgerMenu.classList.contains('active__burger__menu')) {
		document.body.style.overflow = 'hidden'
	}
	else{
		document.body.style.overflow = ''
	}
})

burgerMenuLinks.forEach(burgerMenuLink=>{
	burgerMenuLink.addEventListener('pointerup', ()=>{
		if (burgerMenu.classList.contains('active__burger__menu')) {
			burgerMenu.classList.remove('active__burger__menu')
			document.body.style.overflow = ''
		}
	})
})