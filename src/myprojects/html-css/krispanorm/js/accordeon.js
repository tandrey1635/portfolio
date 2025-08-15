const accordeonWrapper = document.querySelector('.bibliography__wrapper')
const accordeonBtn = document.querySelector('.bibliography__btn')
const accordeon = document.querySelector('.bibliography__menu')

accordeonBtn.addEventListener('click', ()=>{
    accordeonBtn.classList.toggle('bibliography__btn__active')
    accordeon.classList.toggle('bibliography__menu__active')
    accordeonWrapper.classList.toggle('bibliography__wrapper__active')
    if (accordeon.classList.contains('bibliography__menu__active')) {
        accordeonBtn.textContent = 'Показать все'
    }
    else{
        accordeonBtn.textContent = 'Скрыть все'
    }

})