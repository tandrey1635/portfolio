const showArrowUp = () =>{
	const arrowUp = document.querySelector('.arrow__up')

	window.addEventListener('scroll', ()=>{
		if (window.pageYOffset > 500) {
			arrowUp.classList.add('active__arrow__up')
		}
		else{
			arrowUp.classList.remove('active__arrow__up')
		}
	})

	
	arrowUp.addEventListener('click', ()=>{
		window.scrollTo({
			top: 0
		})
	})
}


export { showArrowUp }