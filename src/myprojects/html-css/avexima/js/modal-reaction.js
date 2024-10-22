const modalReaction = document.querySelector('.modal__block__reaction')
const modalReaction1 = document.querySelectorAll('.modal__reaction')

document.body.addEventListener('click', (e)=>{
    target = e.target
    
    if (target.classList.contains('undesirable__reactions__btn')){
        e.preventDefault()
        modalReaction.classList.add('modal__reaction-active')
    } 
    else if (target.classList.contains('modal__reaction__close')) {
        modalReaction.classList.remove('modal__reaction-active')  
    }
    
})



// Выбор текста 3 модальное окно
const inputText = document.querySelector('[data-set="indications-for-use"]')
const inputTextBottom = document.querySelector('[data-set="preparat-problems"]')
const blockTabs = document.querySelectorAll('.modal__reaction__block__tabs')


function selectTextTabs(numberTab, numberInput){
    blockTabs[numberTab].addEventListener('click', (e)=>{
        if (e.target.classList.contains('modal__reaction__block__tabs__item')) {
            numberInput.value += e.target.textContent + ', '
        }
    })
}

selectTextTabs(0, inputText)
selectTextTabs(1, inputTextBottom)




const btnFormPrev = document.querySelectorAll('.modal__reaction__btn-left')
const btnFormNext = document.querySelectorAll('.modal__reaction__btn-right')
const forms = document.querySelectorAll('.modal__reaction')


function hideForm(){
    forms.forEach(form=>{
        form.classList.add('hide-form')
    })
}

hideForm()


function showForm(i = 0){
    forms[i].classList.remove('hide-form')
}

showForm()



// Пагинация модальных окон
// Вперед
function nextPage(btn, page){
    btnFormNext[btn].addEventListener('click', (e)=>{
        hideForm()
        showForm(page)
    })
}

nextPage(0, 1)
nextPage(1, 2)
nextPage(2, 3)

// Назад
function prevPage(btn, page){
    btnFormPrev[btn].addEventListener('click', (e)=>{
        hideForm()
        showForm(page)
    })
}

prevPage(3, 2)
prevPage(2, 1)
prevPage(1, 0)
