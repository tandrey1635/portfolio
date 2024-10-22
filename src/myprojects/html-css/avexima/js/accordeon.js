const accordeon = document.querySelectorAll('.preparat__page__accordeon__item')


accordeon.forEach(item=>{
    item.addEventListener('click', ()=>{
        if (!item.lastElementChild.classList.contains('accordeon-active') && !item.firstElementChild.classList.contains('accordeon-active-after')) {
            item.firstElementChild.classList.add('accordeon-active-after')
            item.lastElementChild.classList.add('accordeon-active')
        } else{
            item.firstElementChild.classList.remove('accordeon-active-after')
            item.lastElementChild.classList.remove('accordeon-active')
        }
    })
})



