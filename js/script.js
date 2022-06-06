const menu = document.querySelector('.burger__menu')
const btnMenu = document.querySelector('.header__nav-mobile')

menu.addEventListener('click', function(){
    btnMenu.classList.toggle('active')
    if (btnMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = ''
    }
})



//липкий хедер

const header = document.querySelector('.header')

window.addEventListener('sroll', ()=>{
    if (window.pageYOffset >=200) {
        header.style.cssText = 'position: fixed; top: 0;'
    }
})