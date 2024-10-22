// Поиск
const searchBtn = document.querySelector('.preparation__page__block__header-search')
const modalSearchMobile = document.querySelector('.modal__search__mobile')
const closeSearchBtn = document.querySelector('.modal__search__mobile__text')
// Фильтр
const filterBtnMobile = document.querySelector('.preparation__page__block__header-filter')
const modalFilterMobile = document.querySelector('.modal__filter__mobile')
const closeFilterBtn = document.querySelector('.modal__filter__mobile__btn-back')

// Внутренний фильтр
const modalFilterItemMobile = document.querySelectorAll('.modal__filter__mobile__item')
const modalDivisionMobile = document.querySelector('.modal__no-division__mobile')
const modalAppointmentMobile = document.querySelector('.modal__appointment__mobile')
const modalNameMobile = document.querySelector('.modal__name__mobile')
const closeDivisionBtn = document.querySelector('.modal__no-division__mobile__btn-back')
const closeAppointmentBtn = document.querySelector('.modal__appointment__mobile__btn-back')
const closeNameBtn = document.querySelector('.modal__name__mobile__btn-back')


function openPreparationModal(btn, modal, className){
    btn.addEventListener('click', ()=>{
        modal.classList.add(className)
    })
    
}
openPreparationModal(searchBtn, modalSearchMobile, 'modal-search-mobile-active')
openPreparationModal(filterBtnMobile, modalFilterMobile, 'modal-filter-mobile-active')
openPreparationModal(modalFilterItemMobile[0], modalDivisionMobile, 'modal-no-division-mobile-active')
openPreparationModal(modalFilterItemMobile[1], modalAppointmentMobile, 'modal-appointment-mobile-active')
openPreparationModal(modalFilterItemMobile[2], modalNameMobile, 'modal-name-mobile-active')

function closePreparationModal(btn, modal, className){
    btn.addEventListener('click', ()=>{
        modal.classList.remove(className)
    })
}

closePreparationModal(closeSearchBtn, modalSearchMobile, 'modal-search-mobile-active')
closePreparationModal(closeFilterBtn, modalFilterMobile, 'modal-filter-mobile-active')
closePreparationModal(closeAppointmentBtn, modalAppointmentMobile, 'modal-appointment-mobile-active')
closePreparationModal(closeNameBtn, modalNameMobile, 'modal-name-mobile-active')
closePreparationModal(closeDivisionBtn, modalDivisionMobile, 'modal-no-division-mobile-active')


const clearFiltersBtn = document.querySelector('.modal__filter__mobile__btn-remove')
const inputsCheckboxBtn = document.querySelectorAll('input[type="checkbox"]')

function clearPreparatFilters(){
    clearFiltersBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        inputsCheckboxBtn.forEach(input=>{
            input.checked = false
        })
    })
}

clearPreparatFilters()


