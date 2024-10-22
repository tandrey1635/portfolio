// Дроп меню
const filters = document.querySelectorAll('[data-set="filters"]')
const clearFilter = document.querySelector('.drop-down__filters__item-remove')
const dropMenu = document.querySelectorAll('.drop-down__filters__menu')
const input = document.querySelectorAll('input[type=checkbox]')

function showMenu(item, menu){
    item.addEventListener('click', (e)=>{
        if(e.target.classList.contains('filters__item-dropmenu')){
            menu.classList.toggle('active-drop-menu')
        }
        if (menu.classList.contains('active-drop-menu')) {
            item.firstElementChild.classList.add('filter-active') 
        }
        else{
            item.firstElementChild.classList.remove('filter-active') 
        }
        
    })
}
    
showMenu(filters[0], dropMenu[0])
showMenu(filters[1], dropMenu[1])


// Сбросить все фильтры
function clearFilters(){
    clearFilter.addEventListener('click', ()=>{
        input.forEach(input=>{
            input.checked = false
        })
    })
}

clearFilters()