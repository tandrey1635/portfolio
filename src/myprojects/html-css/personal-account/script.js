const burger = document.querySelector('.burger')
const onlineMenu = document.querySelector('.info__all__user')

burger.addEventListener('click', ()=>{
    onlineMenu.classList.toggle('active')
})


