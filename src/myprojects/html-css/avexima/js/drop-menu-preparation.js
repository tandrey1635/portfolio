// Дроп меню
const filters = document.querySelector('[data-set="filters"]')
const clearFilter = document.querySelector('.preparation__page__filter__list-remove')
const dropMenu = document.querySelector('.drop-down__filters__menu')
const input = document.querySelectorAll('input[type=checkbox]')

function showMenu(item, menu){
    item.addEventListener('click', (e)=>{
        if(e.target.classList.contains('filters__item-dropmenu')){
            menu.classList.toggle('active-drop-menu')
        }
        if (menu.classList.contains('active-drop-menu')) {
            item.lastElementChild.previousElementSibling.classList.add('filter-active') 
        }
        else{
            item.lastElementChild.previousElementSibling.classList.remove('filter-active')  
        }
        
    })
}
    
showMenu(filters, dropMenu)


// Сбросить все фильтры
function clearFilters(){
    clearFilter.addEventListener('click', ()=>{
        input.forEach(input=>{
            input.checked = false
        })
    })
}

clearFilters()