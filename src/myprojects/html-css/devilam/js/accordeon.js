const showAccordeonContent = () => {
    const accordeon = document.querySelector('.news__page__main__news__bibliography__accordeon')
    accordeon.addEventListener('click', ()=>{
        accordeon.nextElementSibling.classList.toggle('accordeon__active')
        accordeon.classList.toggle('accordeon__rotate')
    })
}

showAccordeonContent()