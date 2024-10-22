const modal = document.querySelector('.modal')

document.body.addEventListener('click', (e)=>{
    target = e.target
    if (target.classList.contains('section__burger') || target.classList.contains('section__burger__line')) {
        modal.classList.toggle('modal__active')
    }
    if (modal.classList.contains('modal__active')){
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }

})

const modalMenuAbout = document.querySelector('.modal__menu__about')
const modalLinkInfo = document.querySelector('.modal__right__center')
const modalLink = document.querySelectorAll('.modal__link')
const modalMenuAboutLink = document.querySelectorAll('.modal__menu__about li a')

document.body.addEventListener('click', (e)=>{
    target = e.target
    // Открыть вложенное меню
    if (target.classList.contains('modal__link__about')) {
        modalMenuAbout.classList.toggle('modal__menu__about-active')
        modalLinkInfo.classList.toggle('modal__link__about-noactive')
    }

    // Добавить прозрачности не активному пункту меню
    if (target.classList.contains('modal__link')) {
        modalLink.forEach(item=>{
            item.classList.add('opacity')
        })
        target.classList.remove('opacity')
        modalMenuAboutLink[0].classList.remove('opacity')

    }
   
})