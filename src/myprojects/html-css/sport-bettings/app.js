const headerDropMenu = document.querySelector('.header__drop-sub-menu')
const headerRightSubMenu = document.querySelector(".header__right__sub-menu")
const promoDropMenu = document.querySelector(".promo__drop-sub-menu")
const arrowImg = document.querySelector(".left__menu__img")
const leftSubMenu = document.querySelector(".left__sub__menu")
const mobileMenu = document.querySelector(".header__nav-mobile")
const headerLeftSubMenuMobile = document.querySelector(".header__drop-sub-menu-mobile")


const dropMenu = document.addEventListener('click', (event)=>{
    const target = event.target

    // дроп меню хедер
    if(target.classList.contains('header__menu__list-dropdown') || target.classList.contains('header__menu__link-dropdown')){
        headerDropMenu.classList.toggle('active')
    }else{
        headerDropMenu.classList.remove('active')
    }
    // дроп меню хедер в конце
    if(target.classList.contains('header__right__list') || target.classList.contains('header__right__img__ball') || target.classList.contains('header__right__img-arrow-down')){
        headerRightSubMenu.classList.toggle('active')
    }else{
        headerRightSubMenu.classList.remove('active')
    }

    // дроп меню промо
    if(target.classList.contains('promo__drop')){
        promoDropMenu.classList.toggle('active')
    }
    else{
        promoDropMenu.classList.remove('active')
    }

    // дроп меню слева
    if(target.classList.contains('left__menu__list-user') || target.classList.contains('left__menu__link-user') || target.classList.contains('left__menu__img')){
        leftSubMenu.classList.toggle('active')
        arrowImg.classList.toggle('img-active')
    }   

    // меню мобильное
    if (target.classList.contains('burger') || target.classList.contains('burger-line')) {
        mobileMenu.classList.toggle("nav-mobile-active")
        document.body.classList.toggle("hidden")
    }

    // дроп меню мобильное
    if (target.classList.contains('header__menu__list-dropdown-mobile') || target.classList.contains('header__menu__link-mobile-dropdown')) {
        headerLeftSubMenuMobile.classList.toggle("active")
    }
    else{
        headerLeftSubMenuMobile.classList.remove("active")
    }
        
})





