const wrapper = document.querySelector('.wrapper')
const menu = document.querySelector('.header__mobile__nav')
const menuBtn = document.querySelector('.fa-bars__menu')
const menuClose = document.querySelector('.fa-window-close')




wrapper.addEventListener('click', (event)=>{
    const target = event.target

    if (target.classList.contains('fa-bars__menu')) {
        menu.classList.toggle('active')
        menuBtn.style.fontSize = '0px'
        menuClose.style.fontSize = '40px'
        document.body.style.overflow = 'hidden'
    }

    if (target.classList.contains('fa-window-close')) {
        menu.classList.toggle('active')
        menuBtn.style.fontSize = '40px'
        menuClose.style.fontSize = '0px'
        document.body.style.overflow = ''
    }

})


// рейтинг изменяет цвет звездочек

wrapper.addEventListener('mouseover', (event) => {
    const target = event.target

    function gold() {
        if (target.classList.contains('fa-star')) {
            target.classList.toggle('golden') 
        }
      
        
    }

    function lime() {
        if (target.classList.contains('fa-star')) {
            target.classList.toggle('lime')
        }
      
    }

    function blue() {
        if (target.classList.contains('fa-star')) {
            target.classList.toggle('blue')
        }
    }

    function clear() {
        target.classList.remove('golden')
        target.classList.remove('lime')
        target.classList.remove('blue')
    }

    setTimeout(gold, 1500)
    setTimeout(lime, 3000)
    setTimeout(blue, 4500)
    setTimeout(clear, 6000)
    
})

