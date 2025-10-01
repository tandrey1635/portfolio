function showAccordeon(classNameHeader, iconClose){
    const accordeonWrapper = document.querySelector('.accordeon__wrapper')

    accordeonWrapper.addEventListener('click', (e)=>{
        if(e.target.classList.contains(classNameHeader)){
            e.target.classList.toggle(iconClose)
            e.target.parentElement.nextElementSibling.classList.toggle('accordeon-active')
        }
    })
}


export { showAccordeon }


