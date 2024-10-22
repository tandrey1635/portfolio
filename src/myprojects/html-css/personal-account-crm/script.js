const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile__menu')

menu.addEventListener('click',()=>{
    mobileMenu.classList.toggle('mobile__menu-active')
    if (mobileMenu.classList.contains('mobile__menu-active')) {
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = ''
    }
    
})




